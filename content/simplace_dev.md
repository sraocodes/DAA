---
title: "Simplace"
description: "Explore the wide range of [SIMPLACE components](https://simplace.net/doc/simplace_modules/index.html), each meticulously crafted to simulate distinct agricultural processes and interactions. This guide categorizes these components into two major sections for an in-depth understanding of their specific functions and applications."
layout: "model_files"

sections:
  - section_name: "Crop Physiology and Management"
    description: "This section covers components related to crop growth, physiology, and agricultural management practices, offering tools for simulating various crop development aspects."
    list:
      title: "Components in Crop Physiology and Management"
      items:
        - "Crop Growth and Development Components:"
        - "[SimpleTranspirationReductionFactor](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/crop/SimpleTranspirationReductionFactor.html): Calculates the transpiration reduction factor."
        - "[VernalisationAndPhotoresponse](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/crop/VernalisationAndPhotoresponse.html): Manages vernalisation and photoresponse."
        - "[Co2InfluenceOnLUE](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/crop/co2/Co2InfluenceOnLUE.html): Assesses CO2's influence on Light Use Efficiency."
        - "[Co2InfluenceOnTranspiration](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/crop/co2/Co2InfluenceOnTranspiration.html): Examines the impact of CO2 on crop transpiration."
        - "[Fertilizer](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/management/Fertilizer.html): Calculates major nutrients for crops."
        - "[SimpleIrrigation](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/management/SimpleIrrigation.html): Implements irrigation using table values."

  - section_name: "Environmental Interactions and Soil Dynamics"
    description: "This section encompasses components focusing on interactions between crops and their environment, as well as those delving into soil properties and water dynamics."
    list:
      title: "Components in Environmental Interactions and Soil Dynamics"
      items:
        - "Environmental Interaction Components:"
        - "[ReferenceETPriestleyTaylor](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/evapotran/ReferenceETPriestleyTaylor.html): Calculates reference evapotranspiration."
        - "Soil and Water Dynamics Components:"
        - "[HillFlow1D](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/experimental/lintulcc/HillFlow1DLintulCCDiurnal.html): Simulates soil water balance."
        - "[ErosionFreebairn](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/experimental/erosion/ErosionFreebairn.html): Models soil erosion scenarios."
        - "[FarmFinance](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/experimental/FarmFinance.html): Assesses financial aspects of farming."
        - "[Gecros](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/models/gecros/Gecros.html): Simulates crop biomass and photosynthesis."
        - "[LintulBiomass](https://simplace.net/doc/simplace_modules/net/simplace/sim/components/models/lintul/LintulBiomass.html): Models crop biomass production."
        - "Utilities and Miscellaneous:"
        - "ArrayResampler: Adjusts array values between resolutions."
        - "SimpleCounter: A resettable counter for simulation days."
        - "InterpolatedValueFromTable: Interpolates values from x and y table values."
---
