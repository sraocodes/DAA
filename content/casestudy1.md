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
    image: "images/soilcompact.jpg"
    imageWidth: "600px"
    imageHeight: "400px"
    textPosition: "bottom"

  - name: "Rooted Insights: Bridging Models"
    text: "The [study](https://www.frontiersin.org/articles/10.3389/fpls.2022.865188/full) showcases the interconnected dynamics of soil strength and root elongation, highlighting the necessity of a coupled model to understand deep soil compaction. While the process-based dynamic model [SIMPLACE](/Phenorob-DAA/simplace/) offers a broad perspective on plant-environment interactions, it might not delve deep enough into root dynamics, a niche [CPlantbox](/Phenorob-DAA/cplantbox/) fills expertly. However, solely depending on [CPlantbox](/Phenorob-DAA/cplantbox/) could miss the bigger picture of holistic plant dynamics and broader field conditions. Marrying these models provides a holistic lens, capturing the complex interplay between a plant and its multifaceted environment."
    list:
      - "SIMPLACE offers broad views but might miss detailed root dynamics."
      - "CRootbox provides deep insights into root behaviors but might overlook larger plant-environment interactions."
      - "Coupling both models yields a comprehensive tool, enhancing our understanding of plant responses to environmental shifts."
    textPosition: "left"
    image: "images/wheat.gif"
    imageWidth: "720px"
    imageHeight: "310px"
    textPosition: "bottom"

  - name: "Coupling of C-RootBox with Simplace"
    text: "The dynamic coupling of CRootbox with SIMPLACE, facilitated through a Python binding, results in the SIMPLACE-cRootbox system. Within SIMPLACE, specific SimComponents such as EvapTranDemand, SlimWater, LintulPhenology, and LintulBiomass play pivotal roles in determining various aspects of crop growth and development. The daily root biomass increment calculated by SIMPLACE is transformed into a potential root elongation (RE) value, which is then provided as input to CRootbox. This potential RE is a measure of how much the roots could potentially grow based on conditions like soil quality, water availability, and nutrient levels. CRootbox then simulates the actual root system and determines the root length density (RLD). This actual RLD is then fed back into SIMPLACE. If the potential RE from SIMPLACE exceeds the maximum possible elongation, CRootbox proportionally reduces root growth. This creates a feedback loop where the root biomass provided by SIMPLACE determines the maximal root elongation, ensuring that root growth limitations due to soil physical stresses are considered before potential root growth limitations due to biomass provided by the shoot."
    list:
      - item: "**Integration**:CRootbox and SIMPLACE are coupled to provide a realistic representation of root growth"
        sublist:
          - "**Method**: Python script."
          - "**Result**: Combined system termed SIMPLACE-cRootbox."

      - item: "**SIMPLACE Components**: Specific components like EvapTranDemand, SlimWater, LintulPhenology, and LintulBiomass are involved in the process"
        sublist:
          - "**EvapTranDemand**: Estimates potential crop transpiration and potential soil evaporation using a modified Penman approach."
          - "**SlimWater**: Computes soil water dynamics, estimating daily change in soil water content based on factors like crop water uptake, soil evaporation,   surface runoff, and seepage below the root zone."
          - "**LintulPhenology**: Calculates the development stage of a crop."
          - "**LintulBiomass**: Determines daily root biomass increment."

      - item: "**Data Flow**"
        sublist:
          - "**From SIMPLACE to CRootbox**: Potential root elongation (RE) derived from SIMPLACE's components."
          - "**From CRootbox to SIMPLACE**: Actual root length density (RLD) simulated by CRootbox."

      - item: "**Feedback Mechanism**:Ensures that root growth limitations due to soil physical stresses are considered before those due to biomass"
        sublist:
          - "**Growth Prioritization**: Emphasis on soil factors over shoot-derived biomass restrictions."
          - "**Mathematical Representation**: If {{< rawhtml >}}\\( RE_{potential} > RE_{max} \\){{< /rawhtml >}}, CRootbox adjusts to ensure {{< rawhtml >}}\\( RLD_{actual} \\leq RLD_{potential} \\){{< /rawhtml >}}. In other words, if potential root elongation was higher than the maximum allowed, CRootbox would reduce root growth equally across all roots"
    image: "images/simcroproot.jpeg"
    imageWidth: "650px"
    imageHeight: "350px"
    textPosition: "bottom"

  - name: "Impact of Soil Loosening on Crops"
    text: "The study used the integrated SIMPLACE-CRootbox model to explore how deep soil loosening affects the growth of spring barley and winter wheat. The model highlighted the relationship between soil compaction, weather, and crop species, emphasizing the role of soil strength. Here are the key takeaways:"
    textPosition: "top"
    list:
      - "**Enhanced Growth with Loosening**: Deep loosening improved root growth, leading to better crop productivity, especially in dry conditions."
      - "**Model Accuracy**: The model effectively simulated root growth from emergence to flowering, capturing the effects of subsoil loosening on both roots and shoots."
      - "**Soil Compaction Insights**: Soil strength, influenced by compaction and moisture, plays a crucial role in root growth. Dense layers can restrict access to deeper soil moisture, especially in warmer climates."
      - "**Agronomic Implications**: Understanding root adaptation to soil conditions can guide cultivar selection and breeding, promoting sustainable agriculture."
      - "**Model's Potential**: This tool can assess the impact of different root traits under various conditions, paving the way for advanced cultivar research and selection."
    image: "images/rootgrowth.png"
    imageWidth: "600px"
    imageHeight: "400px"
    textPosition: "bottom"

  - name: "Conclusions: What this study can promise?"
    text: "The integration of the SIMPLACE and CRootbox models has paved the way for a comprehensive understanding of root-soil interactions and the broader implications of soil compaction at depth. This coupled model is not just a theoretical tool; it holds the promise of tangible benefits for the agricultural sector. By simulating the intricate relationship between soil compaction, weather, and crop species, the model provides insights that are crucial for maintaining agricultural productivity, especially in the face of changing environmental conditions. Furthermore, the model's ability to simulate the adaptive plasticity of roots to local soil conditions is a game-changer. It offers a platform for in-depth exploration of genotype-environment-management interactions, allowing for informed cultivar selection and targeted research on promising root traits. This in silico approach to understanding root growth patterns and their impact on yield is a testament to the model's potential in shaping sustainable agricultural practices for the future. Here are the key takeaways:"
    textPosition: "top"
    list:
      - "**In-depth Understanding**: The coupled model offers a comprehensive perspective on root-soil interactions, highlighting the effects of soil compaction."
      - "**Adaptive Plasticity**: The model effectively simulates the roots' ability to adapt to local soil conditions, emphasizing the importance of understanding root system adaptation for site-specific cultivar selection and breeding."
      - "**Future Crop Ideotypes**: The model can be used to identify and design future crop ideotypes, aiding in the development of crops best suited for specific environmental conditions."
      - "**In Silico Breeding**: The model allows for the exploration of genotype-environment-management interactions, paving the way for in silico breeding and research on promising root traits."
      - "**Sustainable Agriculture**: By providing insights into the effects of soil compaction and weather on crop species, the model plays a pivotal role in promoting sustainable agricultural practices."
      - "Find more on this study from the article [published in Front. Plant Sci. Journal](https://www.frontiersin.org/articles/10.3389/fpls.2022.865188/full)"

---
