---
title: "AgroC Numerical Implementation"
layout: "theory"
sections:

  - name: "Water Flow: Richard's Equation"
    content: |
      In the Watflow module of AgroC, Richard's equation is solved to simulate how water moves through unsaturated soils. In terms of water content, this equation can be written as:
      $$
      \\frac{\\partial \\theta}{\\partial t} = \\nabla \cdot (K(h) \\nabla h) + S
      $$
      where,
      - \\(\\theta\\) is the volumetric water content (dimensionless, typically expressed as m³/m³);
      - \\(h\\) is the hydraulic head (units: L, typically meters);
      - \\(t\\) represents time (seconds or days);
      - \\(K(h)\\) is the hydraulic conductivity, a function of the hydraulic head (units: L/T, typically m/s);
      - \\(S\\) represents sources or sinks of water such as root water uptake or irrigation (units: L³/L³/T, typically m³/m³/s);
      - The spatial derivatives are approximated using finite differences and the temporal derivative is handled via an implicit time-stepping method.

      In AgroC, we solve this equation by using advanced numerical techniques like Picard iteration for non-linear convergence and a Gauss-Siedel elimination technique to solve the resulting linear system of equations. 

  - name: "Discretization of Richard's Equation"
    content: |
      Richard's equation is numerically approximated using a finite difference method (FDM) for spatial discretization and an implicit time-stepping method for temporal discretization. Here is the detailed breakdown:

      #### Finite Difference Method (FDM)
      The differential equation:
      $$
      \\frac{\\partial \\theta}{\\partial t} = \\nabla \cdot (K(h) \\nabla h) + S
      $$
      is discretized for a computational grid point \(i\) as follows:
      $$
      \\frac{\\theta_i^{n+1} - \\theta_i^n}{\\Delta t} = \\frac{K_{i+1/2}^{n+1} (h_{i+1}^{n+1} - h_i^{n+1}) - K_{i-1/2}^{n+1} (h_i^{n+1} - h_{i-1}^{n+1})}{\\Delta z^2} + S_i
      $$
      where:
      - \\(K_{i+1/2}^{n+1}\\) and \\(K_{i-1/2}^{n+1}\\) represent the hydraulic conductivity values interpolated between nodes,
      - \\(\\Delta z\\) is the distance between adjacent nodes (vertical discretization),
      - \\(S_i\\) is the source or sink term at node \(i\), including effects like root water uptake or irrigation.

      #### Handling of Hydraulic Conductivity
      Hydraulic conductivity \(K(h)\) is a key non-linear component in Richard's equation and is dependent on the hydraulic head \(h\). In the discretization:
      $$
      K_{i+1/2}^{n+1} = \\frac{K(h_{i+1}^{n+1}) + K(h_i^{n+1})}{2}
      $$

      #### Time Discretization
      Time discretization is handled implicitly to ensure stability, especially given the non-linear nature of the soil moisture properties. The backward Euler method is used:
      $$
      \\frac{\\theta_{i}^{n+1} - \\theta_{i}^n}{\\Delta t}
      $$
      - where \\(n\\) indicates the time level.

      #### Picard Iteration for Linearization
      To manage the non-linear relationship between hydraulic head and hydraulic conductivity, Picard iteration is utilized:
      $$
      h_i^{n+1,k+1} = h_i^{n+1,k} + \\Delta t \\left( \\nabla \cdot (K(h_i^{n+1,k}) \\nabla h_i^{n+1,k}) + S_i \\right)
      $$
      - Here, \(k\) represents the Picard iteration step within each time step, refining the head approximation iteratively until convergence.

  - name: "Richard's Solver"
    content: |
      #### Gauss Elimination for Linear Systems
      Gauss elimination is employed to solve linear systems formed from the finite difference discretization of Richard's equation. Here's a comprehensive step-by-step description of the entire Gauss elimination process, including the explicit definition and formation of matrix \(A\):

      ##### Formation of Matrix \(A\)
      Matrix \(A\) is formed from the discretization of Richard's equation. It consists of coefficients that account for the hydraulic conductivity between nodes and the storage or capacitance of each node:

      - Diagonal Entries (Aii): These entries are formed based on the local node's hydraulic conductivity and its soil water capacitance. For node \(i\), the diagonal entry Aii is given by:
        $$
        A_{ii} = \frac{K_{i+1/2} + K_{i-1/2}}{\Delta z} + \frac{\text{Cap}_i \cdot \Delta z}{\Delta t}
        $$
        where:
        - \\(K_{i+1/2}\\) and \\(K_{i-1/2}\\) are the conductivities at the interfaces with adjacent nodes,
        - \\(\Delta z\\) is the spatial discretization step,
        - \\(\Delta t\\) is the time step,
        - \\(\text{Cap}_i\\) is the soil water capacitance at node \(i\).


      - Off-Diagonal Entries Aij: These entries represent the fluxes between node \(i\) and its adjacent nodes due to hydraulic conductivity:
        $$
        A_{i,i+1} = -\frac{K_{i+1/2}}{\Delta z}, \quad A_{i,i-1} = -\frac{K_{i-1/2}}{\Delta z}
        $$
        These terms account for the influence of neighboring nodes on node \(i\).

      ##### Formation of Vector \(b\)
      Vector \(b\) accounts for the water content changes and external sources or sinks at each node:
        $$
        b_i = \text{Cap}_i \cdot \frac{\theta_i^n}{\Delta t} + S_i \cdot \Delta z + \text{Boundary Contributions}
        $$
        Here, \\(\theta_i^n\\) is the previous time step's water content, and \\(S_i\\) represents sources or sinks such as root uptake or irrigation.


      **Boundary Conditions:**
      - **Top Boundary:** Modify the first row of \\(A\\) and \\(b\\) depending on specified atmospheric or flux conditions.
      - **Bottom Boundary:** Modify the last row of \\(A\\) and \\(b\\) based on seepage or bottom flux conditions.

      ##### Forward Elimination and Back Substitution
      The solution process involves:
      - **Forward Elimination:** Modifying matrix \\(A\\) to upper triangular form and adjusting vector \(b\) to reflect these transformations, preparing for back substitution.
        $$
        \text{For each } i \text{ from 3 to } N-1:
        \quad \text{if } |A_{i-1,i-1}| > \epsilon:
        \quad \quad b_i = b_i - \frac{b_{i-1} \cdot A_{i,i-1}}{A_{i-1,i-1}}
        \quad \quad A_{ii} = A_{ii} - \frac{A_{i,i-1}^2}{A_{i-1,i-1}}
        \quad \text{else}:
        \quad \quad \text{Print exception}
        $$
      - **Back Substitution:** Solving for the unknown hydraulic heads from the last equation to the first by using the modified \(A\) and \\(b\\):
        $$
        \text{For each } i \text{ from } N \text{ down to 1}:
        \quad h_i = \frac{b_i - A_{i,i+1} \cdot h_{i+1}}{A_{ii}}
        $$

      Each iteration checks for convergence and, if necessary, the time step is adjusted to ensure accurate and stable solutions.
      

---

