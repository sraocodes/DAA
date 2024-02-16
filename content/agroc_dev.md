---
title: "AgroC"
description: "Here we describe the codes of AgroC implementation as well as the instruction to install it along with its
              inputs and outputs from developer's perspective"
layout: "model_files"
sections:

  - section_name: "Overview of AgroC Model's Core Input and Output Variables"
    description: "This list provides an overview of the key variables involved in the AgroC model, emphasizing the fundamental data requirements and outputs."
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
  - section_name: "Detailed Breakdown of AgroC Model's Input Files and Data Formats"
    description: "This section delves deeper into the specific input files and data formats used by the AgroC model"
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
  - section_name: "Technical Overview of AgroC Model's Implementation"
    description: "Dive into the intricate architecture of the AgroC model with our comprehensive guide on its Fortran codes. This section offers an in-depth exploration of the model's internal mechanics, showcasing the specific functions and roles of various code files. From understanding the dynamics of carbon and nitrogen cycles to the simulation of water flow and crop growth, get a detailed view of how each code contributes to the AgroC model's robust environmental simulation capabilities. Ideal for developers and technical enthusiasts, this section serves as a valuable resource for anyone keen on dissecting the computational framework behind AgroC’s advanced ecological modeling."
    table:
      title: "Description of Fortran codes in AgroC"
      headers: ["File", "Primary Functionality", "Associated Variables", "Input/Output"]
      rows:
        - ["carbon.f90", "Models carbon dynamics in soil, including CO2 transport, organic matter decomposition, and microbial interactions.", "CO2 concentration layers, soil properties, decomposition rates, organic carbon inputs, microbial biomass variables, atmospheric pressure, gas constant, molecular CO2", "Input: Soil properties, environmental parameters, CO2 transport and decomposition parameters. Output: Updated CO2 and organic matter concentrations, CO2 production and decomposition rates, CO2 fluxes, microbial activity, soil carbon dynamics."]
        - ["datatypes.f90", "Defines custom data types and structures for use in the AgroSea model.", "Custom data types and structures.", "Not directly applicable"]
        - ["doxygen.conf", "Configuration file for generating Doxygen documentation of the AgroSea model.", "N/A", "N/A"]
        - ["geometry.f90", "Handles geometric aspects in simulations, including defining and manipulating properties of geometric shapes or structures.", "Dimensions, coordinates, properties like area, volume, length, angles, transformation procedures", "Input: Geometric definitions, configuration settings. Output: Calculated geometric properties, transformed geometric entities."]
        - ["input.f90", "Manages reading and processing initial data, particularly environmental or atmospheric parameters.", "Logical variables like lSurf, real variables like rSoil, Prec, integer indices iTemp, jTemp, array iUnit", "Input: Reads from various input files or data streams. Output: Processes and supplies data to other modules."]
        - ["makefile", "Specifies rules for compilation and linking in building the AgroC model.", "N/A", "N/A"]
        - ["material.f90", "Manages properties and behaviors of different materials, with focus on physical, chemical, and mechanical properties.", "Material properties, composite materials, temperature and pressure dependencies, environmental interactions", "Input: Material property parameters, environmental conditions. Output: Calculated material properties under specified conditions."]
        - ["nitrogen.f90", "Simulates nitrogen dynamics, covering processes like nitrogen fixation, nitrification, and denitrification.", "Nitrogen forms (Urea, NH4, NO3), rates and constants for nitrogen processes, logical flags for processes, C/N ratio of biomass", "Input: Environmental parameters, nitrogen concentrations. Output: Updated nitrogen concentrations, process rates and statuses."]
        - ["output.f90", "Generates output data based on environmental and soil parameters.", "Various soil condition and CO2 level variables", "Input: Environmental parameters, soil conditions, model iteration data. Output: Data on soil conditions, CO2 levels, other environmental factors."]
        - ["phosphorus.f90", "Handles phosphorus dynamics in soil, including different soil types and conditions.", "Logical variables for phosphorus pools and uptake, integer variables for soil genesis, real variables like CaCO3 concentration, base saturation, soil pH", "Input: Soil type and phosphorus-related parameters. Output: Updated phosphorus concentrations, soil chemistry alterations."]
        - ["plants.f90", "Models aspects related to various plant types in agricultural or ecological simulations.", "Plant type integers, additional parameters for growth and biological characteristics", "Input: Environmental and biological inputs for plant growth. Output: Plant growth, yield, environmental response predictions."]
        - ["sink.f90", "Handles source and sink dynamics within a system, integrating spatial, environmental, and carbon dynamics.", "Physical quantities like root growth, transpiration, carbon content, internal calculation variables", "Input: Root and environmental parameters. Output: Source and sink values, updated spatial and environmental data."]
        - ["soilco2.f90", "Models CO2 dynamics in soil, including production, transport, and interactions with soil components.", "CO2 concentrations, soil properties, biological process variables, environmental factors", "Input: Soil characteristics, environmental parameters. Output: CO2 concentrations and fluxes, soil property changes."]
        - ["solute.f90", "Manages solute dynamics, including transport and chemical reactions in the environment.", "General and real variables for solute parameters, allocatable arrays, logical variables for solute dynamics", "Input: Environmental parameters, solute concentrations. Output: Updated solute concentrations, reaction rates."]
        - ["temper.f90", "Calculates heat transport, involving temperature modeling and dynamics.", "Temperature, velocity, thermal variables, environmental parameters, material properties", "Input: Environmental, temporal, and material parameters. Output: Temperature profiles, heat transport properties."]
        - ["time.f90", "Handles time-related functionalities in simulations, managing simulation time data and parameters.", "Simulation time data, time information, date and time parameters, profile type", "Input: Time-related parameters and date information. Output: Updated simulation time and date values."]
        - ["watflow.f90", "Calculates water flow using data types, geometrical configurations, and material properties.", "Time variables, water flow parameters, material properties, local calculation variables", "Input: Time and water flow parameters. Output: Updated water flow values, convergence status, iteration details."]
        - ["variables.f90", "Includes functions related to calculating water stress and root exudation, managing various program variables.", "Variables for water stress, root exudation, nitrogen-related processes", "Input: Environmental parameters like water stress and temperature. Output: Managed variables related to environmental aspects."]



---
