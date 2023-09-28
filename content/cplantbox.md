---
title: "CPlantBox"
date: 2023-07-28
draft: false

sections:  
  - name: "What is C-PlantBox?"
    text: "C-PlantBox is a full plant modeling framework that focuses on the growth and development of plant architectures, including both the root and shoot systems. It represents the plant as a single topological network of organs. The simulated plant architecture is made up of nodes or coordinates, and these nodes' properties and interactions form the entire network. For the root part, CPlantBox inherits the flexibility of CRootBox, allowing it to generate any type of root architecture. For the shoot, it has implemented various branching and leaf arrangement patterns. By combining these patterns, CPlantBox can simulate many types of shoot architectures. Visit the official [CPlantBox repository](https://github.com/Plant-Root-Soil-Interactions-Modelling/CPlantBox) for more information."
    image: "images/Cplantbox1.png"
    imageWidth: "250px"
    imageHeight: "300px"
    textPosition: "right"

  - name: "How does it work?"
    text: "The workflow to use CPlantBox starts with generating input files, then interpreting parameters based on the input file. Following this, the model creates the topological structure from the seed or root, and finally, the output can be written to be visualized.The C-PlantBox framework requires specific data structures for its input to ensure accurate modeling. These structures define the parameters and conditions for both root and shoot systems simulation."
    list:
      - "**Parameter Set**: Defines plant-specific characteristics, such as growth rate, branching frequency, etc."
      - "**Environmental Data**: Information on soil type, humidity, light conditions, and other external factors."
      - "**Initial Conditions**: Defines the starting state of the plant system for simulation. This might include initial root length, shoot height, etc."
      - "**Temporal Data**: Information on how certain parameters might change over time, such as light cycles or seasonal changes."
    image: "images/cplantbox2.gif"
    imageWidth: "733px"
    imageHeight: "530px"
    textPosition: "bottom"

  - name: "C-PlantBox features"
    text: "CPlantBox integrates various modules from other Functional Structural Plant Models (FSPMs) into a single user-friendly framework, enhancing the representation of carbon and water fluxes in the soil-plant-atmosphere continuum. This comprehensive approach enables feedback between plant growth and water-carbon fluxes, with carbon partitioning emerging as a model property. CPlantBox offers flexibility in spatial and temporal resolution and can represent diverse plants. It aims to test genotype-environment-management interactions and their emergent properties. Technically, it uses graph formalism for organism representation, combining **C++** speed with **Python's** clarity. For example, it has been coupled with the carbon and water flow model, PiafMunch. This coupling allows for fast simulations on complex plant structures, including the simulation of carbon and water flows within the plant. The highlights:"
    list:
      - "It is capable of simulating the growth and development of a variety of plant architectures (root and shoot)."
      - "It is flexible and can be coupled with external modelling tools."
      - "It is open source, highly accessible and source code available on [github](https://github.com/Plant-Root-Soil-Interactions-Modelling/CPlantBox)."
  
  - name: "Try It Online with Binder!"
    text: "If you'd like to explore and run C-Plantbox without any installations on your local machine, C-Plantbox team have a convenient solution for you – [Binder](http://b.cplantbox.com/)! With just a click, you can have an interactive environment to play with the code and data in this notebook. What are you waiting for?"
    list:
      - "**Introduction**: Delving deep into the basics to ensure a good grasp of the core plant modeling concepts."
      - "**Interactive Examples**: Modify and execute code to see real-time plant root and shoot growths."
      - "**Visualizations**: Python codes and vtk format output enables easy visualization of created plant architectures."
      - "**Exercises**: Apply what you've learned through simple exercises and examples."
    note: "Click the button below to launch this notebook on Binder. Make sure you have a stable internet connection for the best experience."
    image: "https://mybinder.org/static/logo.svg" # The official Binder logo
    imageWidth: "200px"
    imageHeight: "100px"
    textPosition: "left"
  - name: "C-PlantBox lectures"
    text: "Explore the world of plant shoot and root architecture with Prof. Dr. Andrea Schnepf's insightful talks on the C-PlantBox modeling tool. Dive into the intricate mathematics and operational intricacies that power C-PlantBox tool for simulating and analyzing whole plant growth dynamics."
    videos: 
    - videoID: "-YgDnsC3BV8"
      videoTitle: "What is C-PlantBox?"
    - videoID: "dzeV4U58BYA"
      videoTitle: "Mathematics behind C-PlantBox"
    - videoID: "-MjNsvbCf4o"
      videoTitle: "Modeling a virtual Plant"
    textPosition: "top"    
  - name: "Youtube"
    url: "https://www.youtube.com/channel/UCPK-pFfpK94jiamgwHxX32Q"  
---
