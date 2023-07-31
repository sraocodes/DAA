---
title: "CPlantBox"
date: 2023-07-28
draft: false

sections:  
  - name: "What is C-PlantBox?"
    text: "CPlantBox is a full plant modeling framework that focuses on the growth and development of plant architectures, including both the root and shoot systems. It is designed to simulate the complex interactions between carbon and water flows within plants and their response to varying environmental conditions. The framework is built upon an existing root system model called CRootBox and extends it to incorporate the modeling of shoot structures. The framework allows for the representation of a variety of plant species and their specific structures. Visit the official [CPlantBox repository](https://github.com/Plant-Root-Soil-Interactions-Modelling/CPlantBox) for installation guide."
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
    where {{< rawhtml >}}\\(\\frac{dm}{dt}\\){{< /rawhtml >}}  is the change in mass of the system over time, {{< rawhtml >}}\\(I\\){{< /rawhtml >}} is the inflow of mass, and {{< rawhtml >}}\\(O\\){{< /rawhtml >}} is the outflow of mass. In the case of CRootBox, the mass balance equation is used to describe the movement of water and solutes in the root system. The equation takes into account the inflow of water and solutes from the soil, the outflow of water and solutes from the root, and the storage of water and solutes in the root. The equation is solved numerically using a finite difference method, which divides the root system into a grid of discrete points."
    image: "images/Cplantbox1.png"
    imageWidth: "250px"
    imageHeight: "500px"
    textPosition: "left"
  - name: "C-PlantBox features"
    text: "The main features of C-Plantbox are:"
    list:
      - "It is capable of simulating the growth and development of a variety of plant architectures (root and shoot)."
      - "It is flexible and can be coupled with external modelling tools."
      - "It can be used to understand how carbon and water flows influence each other and respond to heterogeneous environmental conditions."   
      - "It is open source, highly accessible and source code available on [github](https://github.com/Plant-Root-Soil-Interactions-Modelling/CPlantBox)."
---