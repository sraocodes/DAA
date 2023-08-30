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
    text: "DuMux-ROSI extends the capabilities of DuMux, specializing in porous media flow and transport processes. At its core lies the Richards equation, a fundamental equation in soil physics that describes unsaturated water flow in porous media. This equation is given by:
    {{< rawhtml >}}
    \\[
    \\frac{\\partial (\\rho_w \\Phi S)}{\\partial t} - \\nabla . \\frac{\\kappa}{\\mu} \\rho_w K (\\nabla p_w - \\rho_w g) = 0
    \\]
    {{< /rawhtml >}}

    where"
    list:
      - "{{< rawhtml >}}\\( \\theta \\){{< /rawhtml >}}: Volumetric water content of the soil. It represents the fraction of the volume of soil that is occupied by water."
      - "{{< rawhtml >}}\\( t \\){{< /rawhtml >}}: Time. The equation describes how the water content changes over time."
      - "{{< rawhtml >}}\\nabla{{< /rawhtml >}}: Nabla operator (gradient operator). It indicates spatial variation or gradient."
      - "{{< rawhtml >}}K(\\theta){{< /rawhtml >}}: Hydraulic conductivity. It describes how easily water can flow through the soil and often depends on the water content \\( \\theta \\)."
      - "{{< rawhtml >}}\\( \\psi \\){{< /rawhtml >}}: Soil water potential. It represents the energy status of water in soil and drives the flow of water."
      - "z: Vertical coordinate (depth in the soil). The term {{< rawhtml >}}\\( \\psi + z \\){{< /rawhtml >}} accounts for both the soil water potential and   gravitational potential."
      - "{{< rawhtml >}}\\( \\rho_w \\){{< /rawhtml >}}: Water density."
      - "{{< rawhtml >}}\\( \\Phi \\){{< /rawhtml >}}: Porosity of the soil."
      - "{{< rawhtml >}}\\( S \\){{< /rawhtml >}}: Saturation of the soil."
      - "{{< rawhtml >}}\\( \\kappa \\){{< /rawhtml >}}: Relative permeability."
      - "{{< rawhtml >}}\\( \\mu \\){{< /rawhtml >}}: Dynamic viscosity."
      - "{{< rawhtml >}}\\( p_w \\){{< /rawhtml >}}: Absolute pressure of the wetting phase (water)."
      - "g: Gravitational acceleration."
    image: "images/Rosi2.jpg"
    imageWidth: "600px"
    imageHeight: "300px"
    textPosition: "bottom"


  - name: "DuMux-ROSI features"
    text: "Key features of DuMux-ROSI include:"
    list:
      - "Easily interchangeable models for root and soil subsystems."
      - "Fully implicit, nonlinear framework leveraging a Newton–Raphson scheme."
      - "Flexibility in modifying, adding, or swapping nonlinear constitutive equations, intricate boundary conditions, and fluid and material relations."

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
