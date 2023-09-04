---
title: "DuMux-ROSI"
date: 2023-08-03
draft: false

sections:  
  - name: "What is DuMux-ROSI?"
    text: "DuMux-ROSI is a novel application of DuMux, integrating the CPlantBox model via a Python binding. This synergy enhances the simulation of soil water dynamics and root-soil interactions. ROSI stands for Root-Soil Interaction. DuMux, an acronym for Dune for multi-{phase, component, scale, physics, domain, . . . } flow and transport in porous media, is a free and open-source simulator for porous media processes. DuMux-ROSI has made significant strides in plant science, particularly in the realm of root-soil interaction modeling."
    image: "images/Rosi1.png"
    imageWidth: "250px"
    imageHeight: "300px"
    textPosition: "left"
  - name: "Why DuMux?"
    text: "DuMuX boasts an extensive collection of porous media models, encompassing compositional, multiphase, and non-isothermal models, along with a wealth of constitutive laws. Unlike typical plant-scale models that rely solely on the Richards equation to simulate soil water dynamics, DuMuX offers flexibility by supporting various soil flow models. For instance, it can incorporate a miscible two-phase two-component, non-isothermal model, complete with evaporation processes."  
    list:
      - "Advanced numerical schemes ensuring accuracy and stability."
      - "Support for various soil flow models beyond the Richards equation."
      - "Integration capabilities with other models, enhancing simulation fidelity."
      - "Open-source nature, fostering community-driven enhancements and applications."

  - name: "How does DuMux-ROSI work?"
    text: "DuMux-ROSI extends the capabilities of DuMux, specializing in porous media flow and transport processes. At its core lies the Richards equation, a fundamental equation in soil physics that describes unsaturated water flow in porous media. Utilizing the Richards equation, it enables in-depth simulations of soil water flow dynamics. An input file serves to specify model parameters and initial and boundary conditions. The Python binding facilitates coupling DuMux with CPlantBox, thereby enabling concurrent modeling of root growth and water uptake. This Richards equation solved in DuMux-ROSI can be written as:
    {{< rawhtml >}}
    \\[
    \\frac{\\partial (\\rho_w \\Phi S)}{\\partial t} - ∇ . \\frac{\\kappa}{\\mu} \\rho_w K (∇ p_w - \\rho_w g) = 0
    \\]
    {{< /rawhtml >}}
    where"
    list:
      - "{{< rawhtml >}}\\( S \\){{< /rawhtml >}}: Saturation of the soil."
      - "{{< rawhtml >}}\\( \\Phi \\){{< /rawhtml >}}: Porosity of the soil."
      - "{{< rawhtml >}}\\( \\theta \\){{< /rawhtml >}}: Volumetric water content of the soil, given by {{< rawhtml >}}\\( \\theta = \\Phi S \\){{< /rawhtml >}}. It represents the fraction of the volume of soil that is occupied by water."
      - "{{< rawhtml >}}\\( t \\){{< /rawhtml >}}: Time. The equation describes how the water content changes over time."
      - "∇: gradient operator. It indicates spatial variation or gradient."
      - "K: Hydraulic conductivity. It describes how easily water can flow through the soil."
      - "{{< rawhtml >}}\\( \\psi \\){{< /rawhtml >}}: Soil water potential. It represents the energy status of water in soil and drives the flow of water."
      - "{{< rawhtml >}}\\( \\rho_w \\){{< /rawhtml >}}: Water density."
      - "{{< rawhtml >}}\\( \\kappa \\){{< /rawhtml >}}: Relative permeability."
      - "{{< rawhtml >}}\\( \\mu \\){{< /rawhtml >}}: Dynamic viscosity."
      - "{{< rawhtml >}}\\( p_w \\){{< /rawhtml >}}: Absolute pressure of the wetting phase (water)."
      - "g: Gravitational acceleration."
    image: "images/Rosi2.jpg"
    imageWidth: "600px"
    imageHeight: "300px"
    textPosition: "bottom"

  - name: "DuMux-ROSI File Structure"
    text: "DuMux-ROSI, designed for simulating soil water dynamics and root-soil interactions, employs a specific file structure. Understanding this structure can enhance your experience with the tool."
    list:
      - "**CODE REPRESENTATION**: DuMux-ROSI has distinct code representations for various model equations. Key files include:"
      - "`localresidual.hh`: This file, located in `/dumux/dumux/porousmediumflow/Richards/`, defines the storage term of the model equations."
      - "`richardsproblem.hh`: Found in `dumux-rosi/rosi_benchmarking/soil_richards/`, this file implements the boundary conditions specified in the input file."
      - "**FLUX TERM**: The flux term's implementation is deep-rooted in the code. Depending on the flux type, its implementation can be found in `/dumux/dumux/flux`."
      - "**INPUT FILES**: DuMux-ROSI uses input files to specify model parameters, initial conditions, and boundary conditions. An example input file is `b1a_1d.input` located in `dumux-rosi/rosi_benchmarking/soil_richards/input/`."
      - "**RUNNING EXAMPLES**: Instructions for running simulations are provided in the [DuMux-ROSI Manual](https://github.com/Plant-Root-Soil-Interactions-Modelling/dumux-rosi/blob/master/Manual.pdf). Navigate to the desired directory and execute the specified commands."
      - "**SOIL PROPERTIES**: Soil properties are defined using the Van Genuchten model. Parameters for different soil layers can be set, including residual water content, saturated water content, and more."


  - name: "DuMux-ROSI features"
    text: "Key features of DuMux-ROSI include:"
    list:
      - "Easily interchangeable models for root and soil subsystems."
      - "Fully implicit, nonlinear framework leveraging a Newton–Raphson scheme."
      - "Flexibility in modifying, adding, or swapping nonlinear constitutive equations, intricate boundary conditions, and fluid and material relations."
      - "**VISUALIZATION**: DuMux-ROSI supports result visualization, offering insights into various processes. The tool's visualization capabilities are integral for researchers and professionals alike."

  - name: "Installation Guide for DuMux-ROSI"
    text: "This installation guide provides a general overview for setting up DuMux-ROSI on Linux systems. For detailed instructions, refer to the [DuMux-ROSI Manual](https://github.com/Plant-Root-Soil-Interactions-Modelling/dumux-rosi/blob/master/Manual.pdf)."
    list:
      - "Ensure a recent version of c++ compiler and python3 is installed."
      - "Install essential tools: git, cmake, libboost, pip, Java Runtime Environment, and Paraview."
      - "Install necessary Python packages: numpy, scipy, and matplotlib."
      - "Set up a dedicated DUMUX directory."
      - "Download and install DUNE core and external modules."
      - "Retrieve and set up dumux, dumux-rosi, alugrid, and CRootBox from their repositories."
      - "For CRootBox, build using `cmake` and `make` commands."
---
