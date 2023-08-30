---
title: "TerrSysMP"
date: 2023-08-04
draft: false

sections:  
  - name: "Introduction to TerrSysMP"
    text: "TerrSysMP (Terrestrial Systems Modeling Platform) is a robust, open-source framework designed for simulating complex interactions between the atmosphere, land surface, and subsurface. It integrates the COSMO or ICON atmospheric models, the Community Land Model (CLM), and the ParFlow model for a holistic view of environmental dynamics, particularly in the hydrological cycle."
    image: "images/terrsysmp1.jpg"
    imageWidth: "250px"
    imageHeight: "250px"
    textPosition: "right"

  - name: "How TerrSysMP Works"
    text: "TerrSysMP employs the [OASIS3-MCT](https://www.esiwace.eu/the-project/past-phases/esiwace2-1/software-support/sup_OASIS) coupler, a pivotal software layer that manages the exchange of information between its component models. This ensures a seamless and accurate simulation of the entire subsurface-land-atmosphere system, capturing intricate interactions and feedbacks."
    list:
      - "During initialization: OASIS-MCT routines define the model variables for exchange and establish parallel communication between the coupled models."
      - "During runtime: OASIS-MCT is called at specific intervals to manage data exchange, supporting interpolation and scaling operations for the variables."
      - "Operational Mode: TerrSysMP uses a multiple program multiple data (MPMD) approach, where different program executables run independently in the same parallel environment, sharing a global communicator."
      - "Data Transfer: The global communicator, facilitated by the OASIS3-MCT library, ensures smooth data transfer between component models."
    image: "images/terrsysmp2.jpg"
    imageWidth: "400px"
    imageHeight: "400px"
    textPosition: "top"


  - name: "Components and Their Roles"
    text: "TerrSysMP is a synergy of three core components, each with a specialized role:"
    list:
      - "COSMO or ICON Model: Responsible for simulating atmospheric dynamics, including weather and climate."
      - "CLM (Community Land Model): Manages land surface processes like soil moisture, vegetation interactions, and energy balance."
      - "ParFlow: Specializes in simulating subsurface hydrological processes, including groundwater flow and solute transport."

  - name: "Key Features"
    text: "TerrSysMP offers several unique capabilities:"
    list:
      - "Highly detailed simulations of water cycles, climate change impacts, and land-atmosphere interactions."
      - "Scalable from laptops to supercomputers, making it versatile for various research needs."
      - "Open-source and community-driven, with code available on [GitHub](https://github.com/HPSCTerrSys/TSMP)."

  - name: "Installation Guide"
    text: "For a step-by-step installation guide, please refer to the official [TerrSysMP site](https://www.terrsysmp.org/). The platform is designed to be compatible with various computing environments, from personal laptops to high-performance computing clusters."

  - name: "Development and Collaboration"
    text: "Developed by the Center for High-Performance Scientific Computing in Terrestrial Systems (HPSC-TerrSys), TerrSysMP is a collaborative effort involving multiple universities and research centers primarily based in Germany."

  - name: "Additional Resources"
    list:
      - "For video tutorials and webinars, visit [TSMP Youtube](https://www.youtube.com/@hpscterrsys1962)."
      - "For more in-depth information and updates, visit the [official site](https://www.terrsysmp.org/)."
---
