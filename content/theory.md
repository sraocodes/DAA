---
title: "Differential Equations"
layout: "theory"
sections:
  - sectionTitle: "Richards' Equation"
    content: |
      Richards' equation describes the movement of water in unsaturated soils. The equation is given by:

      $$
      \frac{\partial \theta}{\partial t} = \frac{\partial}{\partial z} \left( K(\theta) \frac{\partial h}{\partial z} \right)
      $$

      where:
      - \( \theta \) is the volumetric water content,
      - \( t \) is time,
      - \( z \) is the vertical coordinate,
      - \( K(\theta) \) is the hydraulic conductivity,
      - \( h \) is the hydraulic head.

      So however we can do this

      ### Discretization Using Finite Difference Method (FDM)

      To discretize Richards' equation using the finite difference method, we can...

    figures:
      - src: "images/DAA_about2.png"
        caption: "Figure 1: Illustration of Richards' equation parameters."
      - src: "images/DAA_about2.png"
        caption: "Figure 2: Example of water movement in soil."

  - sectionTitle: "Other Differential Equations"
    content: |
      Content for other differential equations goes here...
    figures:
      - src: "images/DAA_about2.png"
        caption: "Figure 3: Example of another differential equation."
---
