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
  - name: "How does DuMux-ROSI work?"
    text: "DuMux-ROSI extends the capabilities of DuMux, specializing in porous media flow and transport processes. Utilizing the Richards equation, it enables in-depth simulations of soil water flow dynamics. An input file serves to specify model parameters and initial and boundary conditions. The Python binding facilitates coupling DuMux with CPlantBox, thereby enabling concurrent modeling of root growth and water uptake."
    image: "images/Rosi2.jpg"
    imageWidth: "650px"
    imageHeight: "300px"
    textPosition: "bottom"
  - name: "DuMux-ROSI features"
    text: "Key features of DuMux-ROSI include:"
    list:
      - "Easily interchangeable models for root and soil subsystems."
      - "Fully implicit, nonlinear framework leveraging a Newton–Raphson scheme."
      - "Flexibility in modifying, adding, or swapping nonlinear constitutive equations, intricate boundary conditions, and fluid and material relations."
      - "Open-source, highly accessible, with the source code available on [github](https://github.com/Plant-Root-Soil-Interactions-Modelling/dumux-rosi)."
  - name: "Additional Resources"
    url: "https://github.com/Plant-Root-Soil-Interactions-Modelling/dumux-rosi/blob/master/Manual.pdf"
    text: "For more detailed instructions on model parameterization, consult the [DuMux-ROSI Manual](https://github.com/Plant-Root-Soil-Interactions-Modelling/dumux-rosi/blob/master/Manual.pdf)."
---
