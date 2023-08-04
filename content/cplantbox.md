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
