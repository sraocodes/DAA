---
title: "SCOPE"
date: 2023-07-28
draft: false

sections:  
  - name: "Introduction to SCOPE"
    text: "SCOPE (Soil Canopy Observation, Photochemistry, and Energy fluxes) is a radiative transfer model, linking satellite observations with terrestrial processes. It simulates radiative transfer across soil, leaves, and vegetation canopies, while modeling intricate processes like photosynthesis and heat dissipation. For more detailed information, visit the official [SCOPE repository](https://github.com/Christiaanvandertol/SCOPE). SCOPE can be applied for:"
    list:
      - "Analyzing phenomena such as solar-induced chlorophyll fluorescence, energy balance fluxes, gross primary production, and thermal signals."
      - "Process-based terrestrial ecosystem modeling, enhancing our understanding of energy exchanges between land surfaces and the atmosphere."
    textPosition: "right"
    image: "images/scope1.png"
    imageWidth: "600px"
    imageHeight: "461px"
    textPosition: "bottom"

  - name: "Key Features of SCOPE"
    list:
      - "Simulation of Vegetated Land Surface Fluxes and Satellite Signals: SCOPE 2.0 links satellite data with ground-based measurements of vegetation."
      - "Improved Computational Efficiency: The newer model now computes 90% faster than previous versions."
      - "Enhanced Representation of Complex Canopies: Ability to simulate complex canopies and explore how vegetation physiology affects remote sensing signals."

  - name: "Technical Details of SCOPE"
    text: "The SCOPE model integrates several components to simulate the interaction of light with vegetation and underlying soil. It models the energy exchanges and physiological processes occurring in plant canopies. The sub-components within SCOPE include the Radiative Transfer Models, the Leaf Biochemical Model, and the Energy Balance Module, each playing a vital role in the comprehensive simulation of land surface processes. Please check the official [Manual here](https://scope-model.readthedocs.io/en/master/)"
    table:
      headers: ["Component", "Description", "Function"]
      rows:
        - ["Radiative Transfer Models", "Simulates the spectrally resolved radiance emanating from vegetation.", "Essential for analyzing how light is absorbed, scattered, and transmitted within plant canopies."]
        - ["Leaf Biochemical Model", "Models the partitioning of energy into fluorescence, heat, or photochemistry within photosystems.", "Essential for understanding photosynthetic efficiency and plant responses to environmental stress."]
        - ["Energy Balance Module", "Integrates net radiation, sensible and latent heat fluxes, alongside photosynthesis rates.", "Essential for modeling energy dynamics in both individual elements (soil and leaves) and entire vegetation stands."]

---
