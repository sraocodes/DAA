---
title: "AgroC"
date: 2023-07-28
draft: false

sections:
  - name: "What is AgroC?"
    text: "AgroC is a 1D integrated model designed for simulating crucial aspects of crop growth and soil interactions, including nutrient dynamics, water fluxes, and carbon cycling. The model is tailored for researchers and practitioners who need an in-depth understanding of crop and soil behavior under various environmental conditions. It accurately models soil carbon turnover, CO2 flux, and plant water stress. Unique features like root exudation and death are considered, highlighting its advanced capabilities in representing real-world agricultural scenarios. AgroC's versatility is demonstrated through its application across diverse study sites with varying climatic conditions and land management practices. Some of its features are: "
    list:
      - "Combines soil and crop growth models."
      - "Detailed analysis of nutrient dynamics, especially phosphorus uptake."
      - "Accurate modeling of water fluxes and soil moisture."
      - "Models photosynthesis and the impact of environmental stress."
      - "Manages harvest residues for sustainable agriculture."
      - "Integrates multiple modules for a comprehensive analysis."
      - "Differentiates diffusive and convective phosphorus uptake."
      - "Phosphorous uptake influenced by root and soil properties."
      - "Estimates nutrient content in harvest residues."
      - "Models root exudation and death."
      - "Links root dynamics to soil respiration."
    image: "images/AgroC.png"
    imageWidth: "250px"
    imageHeight: "250px"
    textPosition: "top"

  - name: "Components of AgroC Model"
    text: "AgroC integrates several key components for a holistic agricultural simulation. The SoilCO2 module handles soil processes, RothC simulates organic carbon turnover, and SUCROS models crop growth and dry matter accumulation. AgroC utilizes Farquhar model for photosynthesis and solves Richard’s equation for soil water balance. These components work together to provide a closed carbon balance for cropped ecosystems. Here is the documentation for [AgroC](/agroC/agroc_manual.pdf)"
    list:
      - "SUCROS Module: Focuses on crop growth, handling photosynthesis and dry matter accumulation. It employs the Farquhar model to simulate photosynthesis, factoring in light absorption, water availability, and rubisco concentration."
      - "SOILCO2 Module: Manages soil water, heat, and CO2 fluxes. This module is responsible for modeling soil water balance using Richard’s equation, which calculates soil water storage change, actual evapotranspiration, and infiltration."
      - "RothC Module: Simulates soil carbon turnover and integrates with other modules to provide a comprehensive view of soil health and carbon cycling. It also evaluates the Net Ecosystem Exchange (NEE), balancing various fluxes like Gross Primary Production (GPP), aboveground and belowground respiration."
      - "Additional Functionalities: AgroC also includes capabilities for quantifying drought stress using the Feddes function, modeling Soil-Plant-Atmosphere Water Relations, and calculating fluorescence emissions using SCOPE model insights."

  - name: "Software and Implementation"
    text: "AgroC is developed using Fortran90, a powerful and widely-used programming language for numerical and scientific computing."
    list:
      - "Compiler Requirement: To install and run AgroC, you will need a Fortran compiler."
      - "Platform Support: The model comes with a makefile for Linux and Mac. However, for Windows users, the installation and setup process is more manual and might require additional steps."
      - "Code Repository: The source codes for AgroC can be accessed and downloaded from the SVN repository. Use the following command to checkout the latest version: `svn co svn://icg4lts.icg.kfa-juelich.de/agroc_codes_v3`."

  - name: "Data Structure: Model Input and Output Variables"
    text: "The AgroC model requires specific input data and produces detailed output data for comprehensive analysis."
    list:
      - "**Model Input Data**:"
      - "Daily weather data: Maximum, minimum, and mean air temperature, solar radiation, and precipitation."
      - "Soil properties: Clay fraction, bulk density, pH, concentrations of organic carbon, and total nitrogen."
      - "Farming management: Dates of planting and harvest, timing and rates of fertilizer application, manure inputs, and crop residue management."
      - "Atmospheric CO2 concentration."
      - "**Model Output Data**:"
      - "Crop carbon: Gross primary production, autotrophic respiration, and net primary production."
      - "Soil carbon: Heterotrophic respiration and organic carbon."
      - "Net ecosystem exchange: Net CO2 exchange between cropland and the atmosphere."
  - name: "Data Structure: Model Input and Output Variables"
    text: "The AgroC model requires specific input data and produces detailed output data for comprehensive analysis."
    list:
      - "**Model Input Data**:"
      - "Daily weather data: Maximum, minimum, and mean air temperature, solar radiation, and precipitation."
      - "Soil properties: Clay fraction, bulk density, pH, concentrations of organic carbon, and total nitrogen."
      - "Farming management: Dates of planting and harvest, timing and rates of fertilizer application, manure inputs, and crop residue management."
      - "Atmospheric CO2 concentration."
      - "**Model Output Data**:"
      - "Crop carbon: Gross primary production, autotrophic respiration, and net primary production."
      - "Soil carbon: Heterotrophic respiration and organic carbon."
      - "Net ecosystem exchange: Net CO2 exchange between cropland and the atmosphere."
      - "**Detailed Input File Description**:"
      - "[plants.in](/agroC/plants.in): Contains crop-specific parameters and settings for crop growth and management."
      - "[selector.in](/agroC/selector.in): Configures various simulation options, including settings for soil, water flow, and atmospheric conditions."
      - "[atmosph.in](/agroC/atmosph.in): Provides meteorological data and atmospheric conditions impacting crop growth, such as temperature and humidity."
      - "[Download Input Files](/agroC/agroC_inputs.zip)"

  - name: "AgroC Model Components Overview"
    text: "This table provides a concise overview of each Fortran file within the AgroC model, detailing their primary functions, key subroutines, associated variables, and input/output behaviors. It serves as a quick reference guide for understanding the modular structure and core functionalities of the AgroC ecosystem model."
    table:
      headers: ["File", "Module Name", "Primary Functionality", "Associated Variables", "Input/Output"]
      rows:
        - ["carbon.f90", "Carbon", "Manages the carbon cycle within the AgroSea model.", "CO2Top, CO2Bot, NPP, GPP", "Output: Carbon fluxes"]
        - ["datatypes.f90", "Datatypes", "Defines custom data types and structures.", "Custom data types and structures.", "Not directly applicable"]
        - ["doxygen.conf", "Doxygen Config", "Configuration for Doxygen documentation.",  "N/A", "N/A"]
        - ["geometry.f90", "Geometry", "Defines the spatial structure or layout.", "Spatial dimensions or properties.", "Input for spatial setup"]
        - ["input.f90", "Input", "Reads and processes initial data.",  "lSurf, rSoil, Prec, iTemp, jTemp", "Input: Various datasets"]
        - ["makefile", "Makefile", "Specifies the compilation and linking rules for building the AgroC model.",  "N/A", "N/A"]
        - ["material.f90", "Material", "Defines properties of different soil materials.", "Soil properties", "Input for material properties"]
        - ["nitrogen.f90", "Nitrogen", "Manages the nitrogen cycle.", "Nitrogen pools and fluxes.", "Output for nitrogen fluxes"]
        - ["output.f90", "Output", "Processes and presents the results.", "GPP, NPP, TER, NEE", "Output: Simulation results"]
        - ["phosphorus.f90", "Phosphorus", "Manages the phosphorus cycle.",  "Phosphorus pools and fluxes.", "Output for phosphorus fluxes"]
        - ["plants.f90", "Plants", "Defines various plant types and properties.",  "Plant types and properties.", "Both, depending on plant data"]
        - ["sink.f90", "Sink", "Handles the concept of sinks in the model.", "Sink dynamics and quantities.", "Output for modeled sink quantities"]
        - ["soilco2.f90", "SoilCO2", "Simulates CO2 dynamics within the soil.",  "CO2 pools and fluxes in soil.", "Output for soil CO2 fluxes"]
        - ["solute.f90", "Solute", "Manages solute movement in the soil.", "Solute concentrations and transport.", "Input for initial solute conditions"]
        - ["temper.f90", "Temper", "Manages temperature dynamics.",  "Temperature values and fluxes.", "Output for temperature values"]
        - ["time.f90", "Time", "Handles time-related functionalities.",  "Time values and steps.", "Input for time setup"]
        - ["watflow.f90", "Watflow", "Simulates water flow in the soil.", "Water flow values and parameters.", "Input for initial water conditions"]

  - name: "Case Studies"
    text: "AgroC has been instrumental in advancing our understanding of crop growth dynamics, soil interactions, and effective agricultural management strategies. The following case studies illustrate AgroC's capability to adapt to different regional climates, management practices, and specific agricultural needs, providing invaluable insights for future agricultural planning and sustainability."
    list:
      - "[Brogi et al. 2020](https://doi.org/10.1002/vzj2.20009) showcased AgroC's application in simulating crop growth and yield relative to soil properties over a square kilometer scale. By integrating a geophysics-based soil map with land use information, the AgroC effectively simulated soil water content dynamics and crop growth for a variety of crops such as sugar beet, maize, potato, wheat, barley, and rapeseed. The study highlights AgroC's accuracy in replicating observed leaf area index and yield data, underscoring its potential in precision agriculture and strategic decision-making."
      - "[Constantin et al. 2019](https://doi.org/10.1016/j.agrformet.2019.05.013) illustrated AgroC's role in a comparative study assessing the impact of crop management and spatial data resolution on regional-scale crop model outputs. In this research, AgroC, among other models, was used to simulate winter wheat and maize over 30 years in North Rhine-Westphalia, Germany. The study explored adaptive management strategies considering local climatic conditions, such as varying sowing dates and nitrogen fertilization, and assessed their effects on crop yield, evapotranspiration, and drainage. Notably, AgroC's predictions showed particular sensitivity to these management changes, underlining its utility in modeling agricultural systems where management practices and spatial resolution are crucial factors."
      - "[Groh et al. 2020](https://doi.org/10.1002/vzj2.20058) demonstrated AgroC's effectiveness in a model intercomparison study on crop growth and soil water fluxes at erosion-affected sites. Utilizing the TERENO-SOILCan lysimeter network, AgroC effectively simulated various agronomic and environmental variables, emphasizing its critical role in modeling and understanding the complexities of agricultural systems influenced by soil heterogeneity."
      - "[Maharjan et al.](https://doi.org/10.1016/j.eja.2018.11.001) investigated how using different levels of detailed information (data aggregation) affects predictions of crop yields in Mediterranean and temperate climates using AgroC and other models. The study revealed significant differences in data aggregation effects between these climates, particularly for spring crops in the Mediterranean region. This highlights the importance of using detailed local data for reliable crop forecasts, especially in areas with diverse weather and soil conditions."
      - "[Žydelis et al.](https://doi.org/10.1016/j.agrformet.2018.08.011) examined how cooler weather and limited water supply affect maize growth, using the AgroC model. The study, conducted in a region with a cooler climate, showed that AgroC can accurately simulate maize growth in these challenging conditions. It was found that cooler weather has a bigger impact on maize yields than occasional water shortages. This research is important for understanding how to grow maize in areas with cooler temperatures, highlighting the usefulness of AgroC in adapting farming practices to different environmental conditions."

  - name: "AgroC Videos"
    text: "The videos here demonstrate how AgroC can flexibly accommodate diverse regional climates, management approaches, and specific agricultural requirements:"
    videos: 
    - videoID: "ZuNX-8Uojsc"
      videoTitle: "AgroC Simulations by Dr.Cosimo to analyze and predict the impact of various factors on crop growth"
---
