---
title: "CPlantBox"
date: 2023-07-28
draft: false

sections:  
  - name: "What is C-PlantBox?"
    text: "C-PlantBox is a full plant modeling framework that focuses on the growth and development of plant architectures, including both the root and shoot systems. It is designed to simulate the complex interactions between carbon and water flows within plants and their response to varying environmental conditions. The framework is built upon an existing root system model called CRootBox and extends it to incorporate the modeling of shoot structures. The framework allows for the representation of a variety of plant species and their specific structures. Visit the official [CPlantBox repository](https://github.com/Plant-Root-Soil-Interactions-Modelling/CPlantBox) for installation guide."
    image: "images/Cplantbox1.png"
    imageWidth: "250px"
    imageHeight: "300px"
    textPosition: "right"
  - name: "How does it work?"
    text: "The model is based on the mass balance equation, which can be represented as follows:
    {{< rawhtml >}}
    \\[
    \\frac{dm}{dt} = I - O
    \\]
    {{< /rawhtml >}}
    where {{< rawhtml >}}\\(\\frac{dm}{dt}\\){{< /rawhtml >}}  is the change in mass of the system over time, {{< rawhtml >}}\\(I\\){{< /rawhtml >}} is the inflow of mass, and {{< rawhtml >}}\\(O\\){{< /rawhtml >}} is the outflow of mass. In the case of CRootBox, the mass balance equation is used to describe the movement of water and solutes in the root system. The equation takes into account the inflow of water and solutes from the soil, the outflow of water and solutes from the root, and the storage of water and solutes in the root. The equation is solved numerically using a finite difference method, which divides the root system into a grid of discrete points. The workflow to use CPlantBox starts with generating input files, then interpreting parameters based on the input file. Following this, the model creates the topological structure from the seed or root, and finally, the output can be written to be visualized."
    image: "images/CPlantBox2.gif"
    imageWidth: "300px"
    imageHeight: "650px"
    textPosition: "left"
  - name: "C-PlantBox features"
    text: "The main features of C-Plantbox are:"
    list:
      - "It is capable of simulating the growth and development of a variety of plant architectures (root and shoot)."
      - "It is flexible and can be coupled with external modelling tools."
      - "It can be used to understand how carbon and water flows influence each other and respond to heterogeneous environmental conditions."   
      - "It is open source, highly accessible and source code available on [github](https://github.com/Plant-Root-Soil-Interactions-Modelling/CPlantBox)."
  - name: "Data Structure for C-PlantBox Input"
    text: "The C-PlantBox framework requires specific data structures for its input to ensure accurate modeling. These structures define the parameters and conditions for both root and shoot systems simulation."
    list:
      - "**Parameter Set**: Defines plant-specific characteristics, such as growth rate, branching frequency, etc."
      - "**Environmental Data**: Information on soil type, humidity, light conditions, and other external factors."
      - "**Initial Conditions**: Defines the starting state of the plant system for simulation. This might include initial root length, shoot height, etc."
      - "**Temporal Data**: Information on how certain parameters might change over time, such as light cycles or seasonal changes."
    note: "It's crucial to ensure that input data is accurate and complete. Inaccuracies can lead to erroneous simulations. Refer to the C-PlantBox documentation for detailed guidance on input data structuring."
    image: "images/cplantbox_input.gif" # Optionally, you can add an image illustrating the data structure
    imageWidth: "250px"
    imageHeight: "500px"
    textPosition: "right"
  - name: "Try It Online with Binder!"
    text: "If you'd like to explore and run C-Plantbox without any installations on your local machine, C-Plantbox team have a convenient solution for you – [Binder](http://b.cplantbox.com/)! With just a click, you can have an interactive environment to play with the code and data in this notebook."
    list:
      - "**Introduction to the Subject**: Delving deep into the basics to ensure a good grasp of the core concepts."
      - "**Interactive Examples**: Modify and execute code to see real-time results."
      - "**Visualizations**: Data-driven insights represented visually for easy understanding."
      - "**Exercises**: Apply what you've learned through simple exercises."
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
