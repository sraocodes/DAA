---
title: "CPlantBox"
date: 2023-07-28
draft: false

sections:  
  - name: "What is CPlantBox?"
    text: "CPlantBox is a plant modeling framework that simulates both root and shoot system development. It represents plants as interconnected networks of organs, enabling detailed simulation of plant architectures and environmental interactions. Built on CRootBox's foundation, it can generate diverse root architectures and implement various branching patterns. The framework integrates with photosynthesis and carbon flow modules for comprehensive plant studies."
    textPosition: "right"
    image: "images/cpb_plant.gif"
    imageWidth: "611px"
    imageHeight: "636px"
    textPosition: "bottom"

  - name: "How does it work?"
    text: "CPlantBox follows a streamlined workflow: input file generation, parameter interpretation, topological structure creation, and output visualization. The framework requires specific data structures for accurate modeling of root and shoot systems."
    list:
      - "**Parameter Set**: Growth rates, branching patterns, and plant characteristics"
      - "**Environmental Data**: Soil conditions, humidity, light, and external factors"
      - "**Initial Conditions**: Starting state including root length, shoot height"
      - "**Temporal Data**: Time-based changes in parameters and conditions"
    image: "images/cplantbox2.gif"
    imageWidth: "588px"
    imageHeight: "582px"
    textPosition: "bottom"

  - name: "CPlantBox features"
    text: "CPlantBox integrates multiple modules covering atmospheric variables and plant water status effects on photosynthesis. It uses C++ for performance with Python's accessibility, and connects with the PiafMunch carbon/water flow model."
    list:
      - "Simulates diverse plant architectures (root and shoot)"
      - "Flexible coupling with external modeling tools"
      - "Open source and accessible on [github](https://github.com/Plant-Root-Soil-Interactions-Modelling/CPlantBox)"
    table:
      headers: ["Model/Module", "Purpose"]
      rows:
        - ["PiafMunch", "Handles carbon and water flow dynamics in plants. [learn more](https://doi.org/10.1093/insilicoplants/diad009)"]
        - ["DuMux", "Models phloem flows driven by hydrostatic pressure gradients"]
        - ["Stomatal Opening Regulation", "Controls transpiration and photosynthesis based on conditions"]
        - ["Xylem Water Flow", "Simulates plant water flow including lateral root/leaf fluxes"]
        - ["Mesophyll and Sieve Tube Sucrose Flow", "Models sucrose transport"]
        - ["Carbon Partitioning", "Simulates growth variations based on conditions"]
        - ["Photosynthesis and Stomatal Opening", "Couples photosynthesis with stomatal regulation"]
    image: "images/cplantbox4.gif"
    imageWidth: "611px"
    imageHeight: "636px"
    textPosition: "bottom"

  - name: "Tight Coupling with other models"
    text: "CPlantBox integrates with PiafMunch and DuMux to simulate carbon and water flow in the plant-soil system. The FvCB-stomatal regulation module enables comprehensive simulation of transpiration and photosynthesis. DuMux-ROSI represents soil-root interactions."
    table:
      headers: ["Model", "Parameters Exchanged"]
      rows:
        - ["From **CPlantBox** to **PiafMunch**", "Plant growth and state information affecting carbon flow"]
        - ["From **PiafMunch** to **CPlantBox**", "Carbon flow and sucrose source data"]
        - ["From **CPlantBox** to **DuMux**", "Plant growth and water requirement information"]
        - ["From **DuMux** to **CPlantBox**", "Soil water flow and availability data"]
        - ["From **CPlantBox** to **FvCB**-Stomatal Regulation", "Plant state and environmental conditions"]
        - ["From **FvCB**-Stomatal Regulation to **CPlantBox**", ["**Net Assimilation Rate**: Carbon assimilation rate","**Leaf Outer-Xylem Water Potential**: Water potential affecting movement"]]
    image: "images/cplantbox4.jpg"
    imageWidth: "885px"
    imageHeight: "576px"
    textPosition: "bottom"

  - name: "Case Studies"
    text: "Notable CPlantBox applications include:"
    list:
      - "[Khare et al. (2022)](https://doi.org/10.3389/fpls.2022.798741) modeling root water uptake in drying soils"
      - "[De Bauw et al. (2020)](https://doi.org/10.1093/aob/mcaa120) studying phosphate uptake in upland rice root systems"

  - name: "Try It Online with Binder!"
    text: "Experience CPlantBox through our interactive [Binder](http://b.cplantbox.com/) environment"
    list:
      - "**Introduction**: Core plant modeling concepts"
      - "**Interactive Examples**: Real-time plant growth visualization"
      - "**Visualizations**: Python and vtk output formats"
      - "**Exercises**: Hands-on learning examples"
    note: "Click the button below to launch Binder"
    image: "https://mybinder.org/static/logo.svg"
    imageWidth: "200px"
    imageHeight: "100px"
    textPosition: "left"

  - name: "CPlantBox lectures"
    text: "Explore plant architecture through CPlantBox modeling lectures. Learn about the mathematics and operations behind plant growth dynamics [here](/videos/) 🌱"

---
