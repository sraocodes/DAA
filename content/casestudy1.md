---
title: "CaseStudy1"
date: 2023-07-28
draft: false

sections:  
  - name: "Deep Dive: Soil Compaction Insights"
    text: " Soil compaction, predominantly caused by heavy machinery on agricultural land, significantly affects plant growth, especially their ability to absorb nutrients. The depth and extent of this compaction, particularly beyond 45 centimeters, remain a concern. While the damaging effects of heavy machinery like tractors and harvesters can be mitigated to some extent by tactics like reducing tire air pressure, compaction can still occur in the deeper soil strata. Techniques exist to loosen compaction up to 45 cm deep, but addressing deeper soil compaction remains a complex challenge. Delving into this issue, phenorob [team](/Phenorob-DAA/members/) conducted an innovative study. By coupling a 1D field-scale crop-soil model from the [SIMPLACE](/Phenorob-DAA/simplace/) framework with the 3D architectural root model [CPlantbox](/Phenorob-DAA/cplantbox/), the team aimed to understand root behaviors and responses in compacted soil. These models operate on a daily timestep, offering insights into the nuanced interactions between plant roots and their environment."
    textPosition: "top"
    list:
      - "Soil compaction hinders nutrient absorption in plants."
      - "Deep soil compaction's impacts on plant growth are still ambiguous."
      - "Coupled Models shed light on root behaviors in compacted soil, especially deep-rooted reactions."

  - name: "Rooted Insights: Bridging Models"
    text: "The [study](https://www.frontiersin.org/articles/10.3389/fpls.2022.865188/full) showcases the interconnected dynamics of soil strength and root elongation, highlighting the necessity of a coupled model to understand deep soil compaction. While the process-based dynamic model [SIMPLACE](/Phenorob-DAA/simplace/) offers a broad perspective on plant-environment interactions, it might not delve deep enough into root dynamics, a niche [CPlantbox](/Phenorob-DAA/cplantbox/) fills expertly. However, solely depending on [CPlantbox](/Phenorob-DAA/cplantbox/) could miss the bigger picture of holistic plant dynamics and broader field conditions. Marrying these models provides a holistic lens, capturing the complex interplay between a plant and its multifaceted environment."
    list:
      - "SIMPLACE offers broad views but might miss detailed root dynamics."
      - "CRootbox provides deep insights into root behaviors but might overlook larger plant-environment interactions."
      - "Coupling both models yields a comprehensive tool, enhancing our understanding of plant responses to environmental shifts."
    textPosition: "left"

  - name: "Coupling of C-RootBox with Simplace"
    text: "The dynamic coupling of CRootbox with SIMPLACE, facilitated through a Python binding, results in the SIMPLACE-cRootbox system. Within SIMPLACE, specific SimComponents such as EvapTranDemand, SlimWater, LintulPhenology, and LintulBiomass play pivotal roles in determining various aspects of crop growth and development. The daily root biomass increment calculated by SIMPLACE is transformed into a potential root elongation (RE) value, which is then provided as input to CRootbox. This potential RE is a measure of how much the roots could potentially grow based on conditions like soil quality, water availability, and nutrient levels. CRootbox then simulates the actual root system and determines the root length density (RLD). This actual RLD is then fed back into SIMPLACE. If the potential RE from SIMPLACE exceeds the maximum possible elongation, CRootbox proportionally reduces root growth. This creates a feedback loop where the root biomass provided by SIMPLACE determines the maximal root elongation, ensuring that root growth limitations due to soil physical stresses are considered before potential root growth limitations due to biomass provided by the shoot."
    list:
      - item: "**Integration**"
        sublist:
          - "**Method**: Python script."
          - "**Result**: Combined system termed SIMPLACE-cRootbox."

      - item: "**SIMPLACE Components**"
        sublist:
          - "**EvapTranDemand**: Estimates potential crop transpiration."
          - "**SlimWater**: Computes soil water dynamics."
          - "**LintulPhenology**: Calculates crop development stage."
          - "**LintulBiomass**: Determines daily root biomass increment."

      - item: "**Data Flow**"
        sublist:
          - "**From SIMPLACE to CRootbox**: Potential root elongation (RE) derived from SIMPLACE's components."
          - "**From CRootbox to SIMPLACE**: Actual root length density (RLD) simulated by CRootbox."

      - item: "**Feedback Mechanism**"
        sublist:
          - "**Growth Prioritization**: Emphasis on soil factors over shoot-derived biomass restrictions."
          - "**Mathematical Representation**: If {{< rawhtml >}}\\( RE_{potential} > RE_{max} \\){{< rawhtml >}}, CRootbox adjusts to ensure {{< rawhtml >}}\\( RLD_{actual} \\leq RLD_{potential} \\{{< rawhtml >}})."
---
