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

  - name: "Case Studies"
    text: "SIMPLACE has been used to simulate the growth and development of various crops in numerous studies:"
    list:
      - "[Furusho-Percot et al. (2022)](https://doi.org/10.1029/2021GL096781) used TerrSysMP to analyze heat waves over a 13-year period in Europe. The study highlighted TerrSysMP's advanced capabilities in simulating heat wave statistics, showing a strong connection between groundwater dynamics and near-surface air temperatures. This led to more accurate heat wave projections compared to other models, emphasizing the importance of detailed hydrological processes in climate modeling."
      - "[Hartick et al. (2020)](https://doi.org/10.1029/2020WR027828) applied TerrSysMP for a probabilistic assessment of Europe's subsurface water storage. They developed a novel method to predict water deficits by analyzing past and current water storage data. This approach accurately predicted continued water shortages in drought-affected regions, emphasizing the model's ability to integrate groundwater dynamics and long-term memory effects in the terrestrial water cycle for improved water resource planning."
      - "[Keune et al. (2018)](https://doi.org/10.1029/2018GL077621) utilized TerrSysMP to explore the impact of human water usage on atmospheric moisture in Europe. Their study revealed that groundwater pumping and irrigation significantly influence the regional climate, particularly by weakening the continental sink over arid regions in southern Europe. This research highlights the complex interactions between human activities and atmospheric processes, suggesting broader socio-economic implications for water resource management."
      - "[Kollet et al. (2018)](https://doi.org/10.3390/w10111697) introduced a groundbreaking terrestrial forecasting/monitoring system using the Terrestrial Systems Modeling Platform (TerrSysMP). This system provides comprehensive real-time predictions of the terrestrial hydrologic and energy cycles from groundwater to atmosphere over regional to continental scales. It marks a significant advancement in integrating atmospheric, land surface, and subsurface processes, offering a more complete and physically consistent view of terrestrial systems. The system is instrumental in enhancing our understanding and management of water resources and weather-related phenomena."
      - "[Shrestha et al. (2018)](https://doi.org/10.1016/j.jhydrol.2018.01.024) explored the effects of horizontal grid resolution on evapotranspiration partitioning in the Terrestrial Systems Modeling Platform (TerrSysMP). Their study highlights that coarser grid resolutions increase soil moisture availability for ground evaporation, thereby decreasing the transpiration/evapotranspiration (T/ET) ratio. They found that agricultural crops were more sensitive to grid resolution changes compared to trees. The study emphasizes the importance of grid resolution in water flux simulations, particularly in the context of wet years, and underlines the necessity for accurate modeling in Earth system models to understand soil and vegetation processes in water cycles."
      - "[Gebler et al. (2017)](https://doi.org/10.1016/j.jhydrol.2017.01.048) conducted a study on high-resolution modeling of soil moisture patterns using the Terrestrial Systems Modeling Platform (TerrSysMP). The research compared model simulations with data from a sensor network, lysimeters, and eddy covariance stations in a managed grassland headwater catchment. The study demonstrated that spatial variability in soil water content (SWC) is significantly influenced by heterogeneous subsurface and topography. Additionally, it was found that 1D inverse parameter estimates of soil hydraulic properties outperformed those based on pedotransfer functions. The research highlights the critical role of detailed subsurface parameterization in accurately simulating soil moisture dynamics and emphasizes the need for integrating various data sources for effective hydrological modeling."
      - "[Sulis et al. (2017)](https://doi.org/10.1175/JHM-D-16-0159.1) examined the coupling of groundwater, vegetation, and atmospheric processes using two integrated models, ParFlow.WRF (PF.WRF) and TerrSysMP. The study focused on the variability in simulated soil-vegetation-atmosphere interactions across North Rhine–Westphalia, Germany. It highlighted the significant impact of land surface parameterizations on model outputs and the sensitivity of models to water-table depth changes. The research revealed that both PF.WRF and TerrSysMP performed well against real-world data, though with certain limitations. The study underscores the importance of accurately representing groundwater dynamics in climate models and demonstrates the variability in model predictions, emphasizing the need for comprehensive modeling approaches for reliable weather and climate predictions."

  - name: "Development and Collaboration"
    text: "Developed by the Center for High-Performance Scientific Computing in Terrestrial Systems [HPSC-TerrSys](https://www.hpsc-terrsys.de/), TerrSysMP is a collaborative effort involving multiple universities and research centers primarily based in Germany."

  - name: "Additional Resources"
    list:
      - "For video tutorials and webinars, visit [TSMP Youtube](https://www.youtube.com/@hpscterrsys1962)."
      - "For more in-depth information and updates, visit the [official site](https://www.terrsysmp.org/)."
---
