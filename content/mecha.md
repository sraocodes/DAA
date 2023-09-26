---
title: "MECHA"
date: 2023-07-28
draft: false
sections:
  - name: "What is MECHA?"
    text: "MECHA is a mathematical model designed to compute the flow of water through various parts of individual cells in a complete root cross-section. This includes the cell walls, membranes, and plasmodesmata. The model takes into account detailed root anatomical descriptions and a minimal set of cell-level hydraulic properties. It uses experimental data on the permeability of cell walls, membranes, and plasmodesmata. The model also considers hydraulic principles at both the cell and root segment scales. Dive deeper into MECHA by visiting its [official site](https://mecharoot.github.io/)."
    image: "images/mecha1.jpg"
    imageWidth: "600px"    
    imageHeight: "600px"  
    textPosition: "top"

  - name: "How Does MECHA Work?"
    text: "MECHA calculates the root reflection coefficient (sr) and root radial hydraulic conductivity (kr) by combining root anatomical data with cell hydraulic properties. It simulates water flow at the cellular level, resulting in kr predictions that align with experimental findings. MECHA seamlessly transitions from cell-level hydraulics to the broader root cross-section, offering an in-depth view of water transport in roots. Here's a breakdown of how kr of roots are computed in MECHA:"
    list:
      - "**Cell-Level Hydraulic Network**: MECHA computes the flow of water through the walls, membranes, and plasmodesmata of each individual cell throughout a complete root cross-section. This detailed hydraulic network at the cell level provides the foundation for upscaling."
      - "**Parameterization with Experimental Data**: The model is parameterized using experimental cell-scale hydraulic properties. These properties include:Conductivity of plasma membranes (Lp), Conductivity of cell walls (kw), and Conductance of plasmodesmata (KPD)"
      - "**Predicting Root Hydraulic Properties**: From the detailed cell-level computations, MECHA predicts the root reflection coefficient (sr) and root radial hydraulic conductivity (kr) for the root cylinder approach used in plant-scale models. This prediction connects hydraulic theories across scales. "
      - "**Comparison with Experimental Data**: The simulated kr values from MECHA fall within the range of measured kr values for maize roots. The model's predictions are validated by comparing them with experimental data from literature."
      - "**Sensitivity Analyses**: MECHA conducts sensitivity analyses to quantify the impact of various cell hydraulic properties on kr. For instance, the model assesses the sensitivity of kr to the permeability of cortex cells (Lp) and other parameters."
      - "**Further Reference**: The image of root architecture level above as well as Mecha working details was taken from the following [publication.](https://doi.org/10.1002/pld3.334)"
    image: "images/mecha2.jpg"
    imageWidth: "700px"
    imageHeight: "350px"
    textPosition: "bottom"  
    
  - name: "MECHA File Structure"
    text: "To facilitate accurate simulations, MECHA employs a specific file structure. Familiarizing yourself with this structure can optimize your usage of the model."
    list:
      - "**INPUT FILES**: MECHA requires four parameter files stored in the /in folder:"
      - "General.xml: Covers general simulation parameters."
      - "BC.xml: Sets boundary conditions for the simulation, determining if the soil is dry, wet, or partially in contact with the root."
      - "Geometry.xml: Defines the root section geometry parameters, allowing you to select the root section for the simulation."
      - "Hydraulics.xml: Covers the hydraulic parameters of various simulation variables."
      - "**OUTPUT FILES**: MECHA saves output files in a folder specified in the General.xml input file, under the Output tag. These files include:"
      - "*.PVTK files: Geometry files compatible with Paraview."
      - "Macro_prop_i.txt files: These provide a summary of simulation results, incorporating the radial data."
    textPosition: "right"

  - name: "Limitations of MECHA"
    text: "Despite MECHA's prowess, it does have certain constraints:"
    list:
      - "Dimension Limitation: MECHA currently operates in two dimensions, potentially affecting its precision in predicting water pressure and root flow."
      - "Focus on Hydraulics: The model emphasizes the hydraulic properties of cells, potentially overlooking other environmental factors impacting plant water relations."
      - "Data Dependency: MECHA necessitates detailed and precise input data, incorporating assumptions that might not encompass the intricacies of real-world processes."
    textPosition: "right"
    image: "images/Mecha2.gif"
    imageWidth: "200px"    
    imageHeight: "500px"  
    textPosition: "left"

  - name: "Try MECHA Online with ShinyApps or Binder"
    text: "Interested in testing MECHA without any installations? Mecha [team](/Phenorob-DAA/members/) have the perfect solution for you – [ShinyApps](https://plantmodelling.shinyapps.io/mecha/) and [Binder](https://mybinder.org/v2/gh/HeymansAdrien/GranarMecha/main). In just one click, immerse yourself in an interactive environment, exploring the code and data of this model."
    image: "https://mybinder.org/static/logo.svg" # The official Binder logo
    imageWidth: "200px"
    imageHeight: "100px"
    textPosition: "left"   
---
