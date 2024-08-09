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

  - name: "Plant Growth and Development Model"
    content: |
      The Plants module in this code simulates crop growth, development, and interactions with the environment. It incorporates several key processes:

      1. Photosynthesis and Biomass Accumulation:
        The model calculates daily gross CO2 assimilation (DTR) based on light interception and photosynthetic capacity:
        $$
        DTR = \int_{0}^{24} (F_s \cdot A_s + F_o \cdot A_o) dt
        $$
        where:
        - $F_s$ and $F_o$ are fractions of shaded and sunlit leaves
        - $A_s$ and $A_o$ are assimilation rates for shaded and sunlit leaves

      2. Crop Development:
        Development stage (DVS) is calculated based on temperature and photoperiod:
        $$
        \frac{dDVS}{dt} = f(T) \cdot f(P) \cdot f(V)
        $$
        where $f(T)$, $f(P)$, and $f(V)$ are functions of temperature, photoperiod, and vernalization, respectively.

      3. Biomass Partitioning:
        Assimilates are distributed among different plant organs (leaves, stems, roots, storage organs) based on development stage-dependent partitioning coefficients.

      4. Leaf Area Index (LAI) Dynamics:
        LAI growth is modeled as:
        $$
        \frac{dLAI}{dt} = SLA \cdot \frac{dW_{leaf}}{dt} - D_{leaf}
        $$
        where SLA is specific leaf area and $D_{leaf}$ represents leaf senescence.

      5. Root Growth and Water Uptake:
        Root growth is simulated, and water uptake is calculated using a sink term approach:
        $$
        S(z) = \alpha(h) \cdot S_{max}(z)
        $$
        where $\alpha(h)$ is a stress reduction function and $S_{max}(z)$ is the maximum potential uptake at depth z.

      6. Evapotranspiration:
        Potential evapotranspiration is partitioned into soil evaporation and plant transpiration based on LAI and crop coefficients.

      7. Carbon Dioxide Assimilation (Farquhar Model):
        When enabled, the Farquhar model is used to calculate CO2 assimilation rate (A):
        $$
        A = \min(A_c, A_j, A_e)
        $$
        where $A_c$, $A_j$, and $A_e$ are the Rubisco-limited, light-limited, and export-limited rates, respectively.

      8. Crop Senescence and Harvest:
        The model simulates crop senescence and allows for multiple growing seasons with harvest events.

      This comprehensive plant growth model integrates various physiological processes to simulate crop development, growth, and yield in response to environmental conditions and management practices.

  - name: "Carbon Cycling and CO2 Production"
    content: |
      The Carbon module in AgroC simulates carbon cycling and CO2 production in the soil. It uses a multi-pool approach similar to the RothC model, with the following key components:

      #### Carbon Pools
      AgroC considers five main carbon pools:
      - DPM (Decomposable Plant Material)
      - RPM (Resistant Plant Material)
      - BIO (Microbial Biomass)
      - HUM (Humus)
      - IOM (Inert Organic Matter)

      #### CO2 Production
      The total CO2 production (g0) is calculated as the sum of heterotrophic respiration (g0h) and root respiration (g0r):
      $$
      g0(i) = g0r(i) + g0h(i)
      $$
      where i represents the soil node.

      #### Environmental Factors
      CO2 production is influenced by several environmental factors, each represented by a reduction function:
      - fS1: Depth reduction
      - fS2: Soil moisture reduction
      - fS3: Temperature reduction
      - fS4: CO2 concentration reduction

      #### Temperature Reduction (fS3)
      The temperature reduction factor is calculated using various models, including the SOILCO2 model:
      $$
      fS3 = \exp\left(\frac{B1(T - T_{ref})}{(T + 273.15)(T_{ref} + 273.15)}\right)
      $$
      where T is the soil temperature, T_{ref} is the reference temperature, and B1 is an empirical parameter.

      #### Moisture Reduction (fS2)
      Various models are available for moisture reduction, including the CENTURY model:
      $$
      fS2 = \frac{1}{1 + 30 \exp(-8.5 \frac{\theta - \theta_r}{\theta_s - \theta_r})}
      $$
      where θ is the volumetric water content, θ_r is the residual water content, and θ_s is the saturated water content.

      #### Carbon Pool Dynamics
      The dynamics of each carbon pool are governed by first-order kinetics:
      $$
      \frac{dC_i}{dt} = -k_i C_i fS2 \cdot fS3 \cdot fS4
      $$
      where C_i is the carbon content of pool i, and k_i is the decomposition rate constant for that pool.

      This module allows for detailed simulation of carbon cycling and CO2 production in soils, taking into account various environmental factors and their complex interactions.

  - name: "Nitrogen Cycling Module"
    content: |
      The Nitrogen module in AgroC simulates the cycling of nitrogen in the soil-plant system. The module solves a set of coupled differential equations representing various nitrogen transformation processes:

      #### Nitrogen Pools and Forms
      The module considers organic nitrogen pools (litter, manure, humus) and inorganic forms (urea, ammonium, nitrate).

      #### Key Processes and Equations

      1. Urea Hydrolysis:
         $$
         \frac{d[Urea]}{dt} = -k_{hyd} \cdot f(T) \cdot f(\theta) \cdot [Urea]
         $$

      2. Nitrification:
         $$
         \frac{d[NH_4^+]}{dt} = -k_{nit} \cdot f(T) \cdot f(\theta) \cdot [NH_4^+]
         $$

      3. Denitrification:
         $$
         \frac{d[NO_3^-]}{dt} = -k_{den} \cdot f(T) \cdot f(\theta) \cdot f(WFPS) \cdot [NO_3^-]
         $$
         where WFPS is the water-filled pore space.

      4. Volatilization:
         $$
         \frac{d[NH_3]}{dt} = k_{vol} \cdot f(T) \cdot f(\theta) \cdot [NH_4^+]
         $$

      5. Mineralization-Immobilization:
         $$
         \frac{dN_{org}}{dt} = -k \cdot f(T) \cdot f(\theta) \cdot N_{org} \cdot \left(\frac{C/N_{org}}{C/N_{ref}} - 1\right)
         $$
         where C/N_org is the C/N ratio of the organic matter and C/N_ref is a reference C/N ratio.

      6. Plant Uptake:
         Combines passive uptake (mass flow) and active uptake (diffusion):
         $$
         U_{total} = U_{passive} + U_{active}
         $$
         where U_passive is proportional to water uptake and concentration, and U_active follows Michaelis-Menten kinetics.

      7. Biological Nitrogen Fixation:
         $$
         N_{fix} = R_{fix} \cdot f(T) \cdot f(\theta) \cdot f(N_{stress})
         $$
         where R_fix is the potential fixation rate and f(N_stress) represents plant N status.

      #### Environmental Factors
      Temperature and moisture effects are modeled using reduction functions:
      $$
      f(T) = Q_{10}^{(T-T_{ref})/10}
      $$
      $$
      f(\theta) = \left(\frac{\theta - \theta_{min}}{\theta_{opt} - \theta_{min}}\right)^{\beta}
      $$

      #### System of Differential Equations
      The module solves a system of coupled differential equations for each nitrogen pool and form:
      $$
      \frac{d[N_i]}{dt} = \sum_{j} (Input_j - Output_j)
      $$
      where [N_i] represents the concentration of each nitrogen form, and Input_j and Output_j are the various transformation processes affecting that form.

      This system of equations is solved numerically to simulate the dynamic nitrogen cycling in the soil-plant system, accounting for various transformation processes and environmental influences.

  - name: "Solute Transport Module"
    content: |
      The Solute module in AgroC simulates the transport and reactions of various solutes in the soil-plant system. The core of this module is the solution of the advection-dispersion-reaction equation:

      $$
      \frac{\partial (\theta R C)}{\partial t} = \nabla \cdot (\theta D \nabla C) - \nabla \cdot (q C) + S
      $$

      where:
      - θ is the volumetric water content (dimensionless)
      - R is the retardation factor (dimensionless)
      - C is the solute concentration (M/L³)
      - D is the dispersion coefficient (L²/T)
      - q is the water flux (L/T)
      - S represents source/sink terms (M/L³/T)

      The dispersion coefficient D is calculated as:

      $$
      D = \alpha |v| + D_w \tau_w + \frac{\theta_g}{\theta_w} D_g H \tau_g
      $$

      where:
      - α is the dispersivity (L)
      - v is the pore water velocity (L/T)
      - D_w and D_g are molecular diffusion coefficients in water and gas phases (L²/T)
      - τ_w and τ_g are tortuosity factors (dimensionless)
      - H is Henry's constant (dimensionless)
      - θ_g and θ_w are gas and water contents (dimensionless)

      The module incorporates various adsorption models, including:

      1. Linear isotherm: S = K_d C
      2. Freundlich isotherm: S = K_f C^n
      3. Langmuir isotherm: S = (Q_m K C) / (1 + K C)

      where S is the adsorbed concentration, and K_d, K_f, n, Q_m, and K are empirical parameters.

      For non-equilibrium transport, the module uses a two-site sorption model or a dual-porosity model, introducing additional equations for the kinetic sorption or mass transfer between mobile and immobile water.

      Root solute uptake is modeled as a combination of passive and active uptake:

      $$
      S_{uptake} = \alpha_w S_{passive} + S_{active}
      $$

      where α_w is related to water uptake, and S_active follows Michaelis-Menten kinetics.

      The module solves these equations using finite difference spatial discretization and implicit time-stepping, with options for upstream weighting in advection-dominated scenarios.

---

