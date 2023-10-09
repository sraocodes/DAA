---
title: "Agro-C"
date: 2023-07-28
draft: false

sections:  
  - name: "What is Agro-C ?"
    text: "AGRO-C is a computer model used to understand how carbon moves in and out of agricultural soil, which is called the 'carbon budget' of the farm or field. The model helps scientists understand how much carbon is being absorbed by crops, how much is stored in the soil, and how much is exchanged with the atmosphere. Understanding the carbon budget of agroecosystems has implications for climate change mitigation and sustainable land management.Visit the official [AGRO-C documentation](https://www.sciencedirect.com/science/article/abs/pii/S0168192308002062) for detailed information."
    image: "images/AgroC.png"
    imageWidth: "250px"
    imageHeight: "250px"
    textPosition: "right"

  - name: "Description of Agro-C Model"
    text: "The Agro-C model is a coupling of the SOILCO2/RothC model and the SUCROS model for crop growth. It simulates water, heat, and CO2 flux in a soil column, as well as the turnover of depth-specific carbon pools. The model has been validated in various laboratory and field studies, ensuring its accuracy and reliability.The Agro-C has two main parts:"
    list:
      - "Crop-C: This part simulates how crops grow and take in carbon from the air during photosynthesis."
      - "Soil-C: This part simulates what happens to the carbon from crop residues and other organic sources in the soil."
    image: "images/Agroc2.gif"
    imageWidth: "250px"
    imageHeight: "250px"
    textPosition: "left"

  - name: "Crop-C sub-model"
    text: "The Crop-C sub-model in AGRO-C focuses on the journey of carbon in the life of a plant. It calculates how much carbon the plant absorbs from the atmosphere through photosynthesis (also known as Gross Primary Production or GPP). It then considers how much of this carbon the plant uses for its own growth and basic life functions, a process known as Autotrophic Respiration (RA). The remaining carbon, termed as Net Primary Production (NPP), is the balance between what the plant takes in and what it uses. The sub-model also tracks how much of this remaining carbon gets transferred into the soil."
    image: "images/Agroc3.gif"
    imageWidth: "250px"
    imageHeight: "300px"
    textPosition: "right"

  - name: "Soil-C sub-model"
    text: "The Soil-C submodel in AGRO-C helps us understand how organic carbon moves and changes in agricultural soils. It considers the balance between carbon going into the soil and carbon leaving the soil. By considering these processes, the model gives insight into how carbon levels change in agricultural soils over time."

  - name: "Net Ecosystem Exchange"
    text: "Crop-C and Soil-C submodels are linked through the concept of Net Ecosystem Exchange (NEE). NEE represents the balance between carbon gained by the ecosystem and carbon lost by the ecosystem. Understanding NEE helps us determine whether an ecosystem is acting as a net carbon sink (absorbing more carbon than it releases) or a net carbon source (releasing more carbon than it absorbs)."
    image: "images/Agroc4.gif"
    imageWidth: "250px"
    imageHeight: "300px"
    textPosition: "right"

  - name: "Features"
    text: "The main features of Agro-C are:"
    list:
      - "It aids in understanding the carbon budget of agricultural ecosystems."
      - "It simulates the carbon dynamics considering factors like crop type, management practices, and   climate variables."
      - "It divides the carbon budget into Crop-C and Soil-C for better understanding and prediction." 
      - "Validated through extensive laboratory and field studies."

  - name: "Software and Implementation"
    text: "Agro-C is developed using Fortran90, a powerful and widely-used programming language for numerical and scientific computing."
    list:
      - "Compiler Requirement: To install and run Agro-C, you will need a Fortran compiler."
      - "Platform Support: The model comes with a makefile for Linux and Mac. However, for Windows users, the installation and setup process is more manual and might require additional steps."
      - "Code Repository: The source codes for Agro-C can be accessed and downloaded from the SVN repository. Use the following command to checkout the latest version: `svn co svn://icg4lts.icg.kfa-juelich.de/agroc_codes_v3`."

  - name: "Data Structure: Model Input and Output Variables"
    text: "The Agro-C model requires specific input data and produces detailed output data for comprehensive analysis."
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

  - name: "Agro-C Model Components Overview"
    text: "This table provides a concise overview of each Fortran file within the Agro-C model, detailing their primary functions, key subroutines, associated variables, and input/output behaviors. It serves as a quick reference guide for understanding the modular structure and core functionalities of the Agro-C ecosystem model."
    table:
      headers: ["File", "Module Name", "Primary Functionality", "Associated Variables", "Input/Output"]
      rows:
        - ["carbon.f90", "Carbon", "Manages the carbon cycle within the AgroSea model.", "CO2Top, CO2Bot, NPP, GPP", "Output: Carbon fluxes"]
        - ["datatypes.f90", "Datatypes", "Defines custom data types and structures.", "Custom data types and structures.", "Not directly applicable"]
        - ["doxygen.conf", "Doxygen Config", "Configuration for Doxygen documentation.",  "N/A", "N/A"]
        - ["geometry.f90", "Geometry", "Defines the spatial structure or layout.", "Spatial dimensions or properties.", "Input for spatial setup"]
        - ["input.f90", "Input", "Reads and processes initial data.",  "lSurf, rSoil, Prec, iTemp, jTemp", "Input: Various datasets"]
        - ["makefile", "Makefile", "Specifies the compilation and linking rules for building the Agro-C model.",  "N/A", "N/A"]
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
---
