---
title: "CPlantBox"
date: 2023-07-28
draft: false

sections:  
  - name: "What is CPlantBox?"
    text: "CPlantBox is a full plant modeling framework that focuses on the growth and development of plant architectures, including both the root and shoot systems. It represents the plant as a single topological network of organs. The simulated plant architecture is made up of nodes or coordinates, and these nodes' properties and interactions form the entire network. For the root part, CPlantBox inherits the flexibility of CRootBox, allowing it to generate any type of root architecture. For the shoot, it has implemented various branching and leaf arrangement patterns. By combining these patterns, CPlantBox can simulate many types of shoot architectures. Further, the latest CPlantBox implementation provides linkage with different modules (photosynthesis and carbon flow) within a single framework, enhancing its capabilities and making it a versatile tool for plant studies. Visit the official [CPlantBox repository](https://github.com/Plant-Root-Soil-Interactions-Modelling/CPlantBox) for more information."
    textPosition: "right"

  - name: "How does it work?"
    text: "The workflow to use CPlantBox starts with generating input files, then interpreting parameters based on the input file. Following this, the model creates the topological structure from the seed or root, and finally, the output can be written to be visualized.The C-PlantBox framework requires specific data structures for its input to ensure accurate modeling. These structures define the parameters and conditions for both root and shoot systems simulation."
    list:
      - "**Parameter Set**: Defines plant-specific characteristics, such as growth rate, branching frequency, etc."
      - "**Environmental Data**: Information on soil type, humidity, light conditions, and other external factors."
      - "**Initial Conditions**: Defines the starting state of the plant system for simulation. This might include initial root length, shoot height, etc."
      - "**Temporal Data**: Information on how certain parameters might change over time, such as light cycles or seasonal changes."
    image: "images/cplantbox2.gif"
    imageWidth: "588px"
    imageHeight: "582px"
    textPosition: "bottom"

  - name: "C-PlantBox features"
    text: "CPlantBox incorporated several modules, including those related to the effects of atmospheric variables and plant water status on coupled stomatal opening and photosynthesis. The novel aspect of this latest CPlantBox implementation is the linkage of all these modules within one framework. It aims to test genotype-environment-management interactions and their emergent properties. Technically, it uses graph formalism for organism representation, combining **C++** speed with **Python's** clarity. For example, it has been coupled with the carbon and water flow model, PiafMunch. This coupling allows for fast simulations on complex plant structures, including the simulation of carbon and water flows within the plant. The highlights:"
    list:
      - "It is capable of simulating the growth and development of a variety of plant architectures (root and shoot)."
      - "It is flexible and can be coupled with external modelling tools."
      - "It is open source, highly accessible and source code available on [github](https://github.com/Plant-Root-Soil-Interactions-Modelling/CPlantBox)."
    table:
      headers: ["Model/Module", "Purpose"]
      rows:
        - ["PiafMunch", "Handles the carbon and water flow dynamics within the plant and the soil-plant-atmosphere continuum. [learn more](https://doi.org/10.1093/insilicoplants/diad009)"]
        - ["DuMux (Soil Water Flow)", "A model for phloem flows driven by hydrostatic pressure gradients was adapted for tight coupling to CPlantBox."]
        - ["Stomatal Opening Regulation", "Regulates transpiration (water sink) and photosynthesis (sucrose source) based on atmospheric and leaf conditions."]
        - ["Xylem Water Flow", "Simulates the flow of water in the plant, including lateral root and leaf fluxes and soil-root water exchanges."]
        - ["Mesophyll and Sieve Tube Sucrose Flow", "Simulates the flow of sucrose in the plant."]
        - ["Carbon Partitioning (from other FSPMs)", "Became an emerging property in CPlantBox, allowing for simulations of growth variations based on conditions."]
        - ["Photosynthesis and Stomatal Opening", "A coupled photosynthesis (FvCB) and stomatal opening model was added to the CPlantBox."]
    image: "images/cplantbox3.png"
    imageWidth: "352px"
    imageHeight: "500px"
    textPosition: "bottom"

  - name: "Tight Coupling with other models"
    text: "The main objective of coupling CPlantBox with PiafMunch and Dumux is to simulate the carbon and water flow within the plant-soil system. PiafMunch is responsible for handling the carbon flow module within the plant while DuMux is used to simulate soil water flow. When coupled with CPlantBox, it allows for the simulation of the soil–plant–atmosphere continuum, considering both water and carbon fluxes. Similarly the objective of integrating the FvCB-stomatal regulation module with CPlantBox is to simulate the processes of transpiration and photosynthesis, particularly in the leaf blades, and to provide a comprehensive understanding of the plant's response to environmental conditions. Similarly Dumux module which is a flow and transport in porous media simulator is now integrated into the CPlantBox framework via a Python binding in order to represent the soil in which the plant roots are growing. This integrations now known by Dumux-ROSI. ROSI stands for Root-Soil Interaction. This synergy coupling enables to accurately represent soil and rhizosphere processes and their interactions with a growing root architecture. This installation guide provides a general overview for setting up DuMux-ROSI on Linux systems. For detailed instructions, refer to the [DuMux-ROSI Manual](https://github.com/Plant-Root-Soil-Interactions-Modelling/dumux-rosi/blob/master/Manual.pdf)."
    table:
      headers: ["Model", "Parameters Exchanged"]
      rows:
        - ["From **CPlantBox** to **PiafMunch**", "Information related to plant growth, structure, and current state which can influence carbon flow."]
        - ["From **PiafMunch** to **CPlantBox**", "Data on carbon flow, sucrose source, and potential carbon limitations."]
        - ["From **CPlantBox** to **DuMux**", "Information about plant growth, root structure, and water requirements."]
        - ["From **DuMux** to **CPlantBox**", "Data on soil water flow, availability, and potential water uptake by the plant."]
        - ["From **CPlantBox** to **FvCB**-Stomatal Regulation", "Information related to plant growth, structure, current state, and environmental conditions that can influence transpiration and photosynthesis."]
        - ["From **FvCB**-Stomatal Regulation to **CPlantBox**", ["**Net Assimilation Rate**: Represents the rate of carbon assimilation in the plant.","**Leaf Outer-Xylem Water Potential**: Indicates the water potential in the outer xylem of the leaf, influencing water movement within the plant."]]
    image: "images/cplantbox4.jpg"
    imageWidth: "885px"
    imageHeight: "576px"
    textPosition: "bottom"

  - name: "Case Studies"
    text: "CPlantbox has been used to simulate and analyze various aspects of plant growth and soil interactions in numerous studies:"
    list:
      - "[Khare et al. (2022)](https://doi.org/10.3389/fpls.2022.798741) utilized CPlantbox to model root water uptake in drying soil conditions. Their study, focusing on soil hydraulic conductivity and its effect on root water uptake, demonstrates the importance of accurate modeling in predicting plant responses to dry soil conditions."
      - "[De Bauw et al. (2020)](https://doi.org/10.1093/aob/mcaa120) employed CPlantbox for constructing a functional–structural model of upland rice root systems. This study underscores the impact of lateral roots and growing root tips on phosphate uptake, and how CPlantbox can be used to simulate root growth and nutrient uptake under varying soil conditions."

  - name: "CPlantBox Structural Components Overview"
    text: "This table provides a concise overview of each C++ file within the CPlantBox Structural Component, detailing their primary functions, key subroutines, associated variables, and input/output behaviors."
    table:
      headers: ["File", "Module Name", "Primary Functionality", "Associated Variables", "Input/Output"]
      rows:
        - ["Leaf.cpp", "Structural", "Simulates the growth and development of leaves, including creation, parameter computation, and visualization.", "Leaf identification, parameters, growth factors, geometric properties, tropism, organ connectivity.", "Input: Growth parameters and environmental factors. Output: Structural and physical properties of leaves."]
        - ["MappedOrganism.cpp", "Structural", "Defines and manages the structure of the plant system, including nodes, segments, and their mapping to a 3D soil grid. It includes functionalities for initializing and simulating the growth of root and shoot systems, handling their spatial representation and interaction with the soil environment.", "nodes, nodeCTs, segments, radii, subTypes, organTypes, soil_index, plantParam, exchangeZoneCoefs, leafBladeSurface, segVol, bladeLength", "Input: Plant structure and soil grid parameters. Output: Updated plant structure, segment mappings, and growth simulation data."]
        - ["Organ.cpp", "Structural", "Describes a plant organ and serves as a base class for seeds, roots, stems, and leaves. Manages organ development, geometry (nodes, indices, creation times), organ tree structure (parent, children, organism), and organ parameters.", "Nodes, node indices, creation times, segments, organ tree (parent, children, plant organism), specific parameters, organ type, age, length, alive/active status.", "Input: Development parameters and time steps. Output: Updated organ structure, growth simulation, and geometry."]
        - ["Organism.cpp", "Structural", "Manages OrganRandomParameters and offers an interface for the simulation loop (initialize, simulate, etc.). Collects node and line segment geometry from the organ tree, organ parameters, and supports RSML. Handles global node index and organ index counter, and holds a random number generator.", "OrganRandomParameters, base organs, simulation time, node and segment geometry, organ indices, node indices, random number generator.", "Input: Initialization and simulation parameters. Output: Simulated organism development, geometry data, RSML files."]
        - ["Plant.cpp", "Structural", "Manages plant model parameters, simulation, and stores the plant seed. Manages initialization, growth simulation, and post-processing utilities. Handles plant-specific tropisms and growth functions. Provides methods for simulation setup, including initializing callback functions for tropisms and growth functions.", "Plant tropism types, growth function types, soil lookup for hydrotropism, organ parameters, simulation state, callback functions.", "Input: Initialization parameters, growth simulation parameters. Output: Simulated plant growth, utility functions output."]
        - ["Root.cpp", "Structural", "Describes a single root with a vector of nodes. Manages the growth of the root and the creation of lateral roots in the branching zone. Handles root-specific parameters and provides simulation capabilities for root growth over a given time span.", "Root specific parameters, organ types, simulation state, node creation, lateral root emergence, growth functions, tropism.", "Input: Growth simulation parameters, environmental factors. Output: Growth of the root and creation of new nodes and lateral roots."]
        - ["RootDelay.cpp", "Structural", "Manages the growth and development of lateral roots based on a predefined delay, rather than emerging after the apical zone reaches a specific length. Inherits from the Root class and overrides functions to implement delay-based lateral root emergence.", "Root delay parameters, lateral root creation, deep copying of root structure, debugging information.", "Input: Growth simulation parameters with delay considerations. Output: Growth of delayed lateral roots, maintaining root structure integrity."]
        - ["RootSystem.cpp", "Structural", "Manages the entire root system including the base roots, root parameters, and simulation states. Provides functionalities for root system initialization, simulation, state management, and post-processing analysis. Inherits from the Organism class and integrates various root types and their dynamics.", "Root system parameters, root tropism and growth functions, simulation state management, root system analysis tools.", "Input: Root system configuration and simulation parameters. Output: Simulated root system growth, analysis, and state management."]
        - ["Seed.cpp", "Structural", "Defines the Seed class, which represents the seed of a plant and acts as the origin for the development of various plant organs like stems, roots (taproot, basal, shootborne), and tillers. It manages the creation, initialization, and copying of these organs, and integrates with the overall plant organism structure.", "Seed initialization and development, organ creation and management, integration with plant organism structure.", "Input: Plant configuration and organ parameters. Output: Initialized plant organs like roots and stems, connected to the seed."]
        - ["Stem.cpp", "Structural", "Manages the functional aspects of stem growth and development in plants. Capable of simulating stem growth, handling lateral stem emergence, and computing growth parameters based on organ-specific data. Supports various growth scenarios, including internodal growth and branching.", "Stem growth simulation, lateral stem management, growth parameter computation, support for different growth modes (e.g., sequential, equal distribution).", "Input: Organism and stem-specific parameters, growth data. Output: Simulated stem growth, lateral stem data, computed growth parameters."]
        - ["organparameter.cpp", "Structural", "Central to the CPlantBox framework, handling the configuration and characteristics of various organ types in plants. It offers a flexible setup for different organ parameters, facilitating the creation of diverse plant structures. Capable of managing organ-specific parameters as well as randomized parameters for variability in simulations.", "Organ type configuration, organ-specific parameter handling, support for diverse plant structures, management of random parameters for simulation variability.", "Input: Organism-specific data, organ configuration parameters. Output: Configured organ parameters, organ-specific characteristics for simulation."]
        - ["rootparameter.cpp", "Structural", "Integral components of the CPlantBox framework, these files define the parameters and functionalities specific to root structures in plants. They handle detailed configurations for root growth, including basal and apical zones, inter-lateral distances, and root tropism. The setup allows for variability in root characteristics, enhancing the simulation's realism.", "Root type configuration, specific root parameters, root growth dynamics, root tropism handling, inter-lateral distance management, root color configuration.", "Input: Root-specific data, configuration parameters for root growth. Output: Configured root parameters, specific root characteristics for simulation."]
        - ["seedparameter.cpp", "Structural", "Key file in the CPlantBox structural part that define seed-specific parameters. This file handle the initialization and configuration of seed-related properties, including seed positioning, emergence times of various root types, and simulation parameters.", "Seed positioning, basal and shoot borne root emergence, root crown configuration, tiller parameters, simulation time management.", "Input: Seed-specific data and initial configuration parameters. Output: Configured seed parameters and initial plant development characteristics."]
        - ["stemparameter.cpp", "Structural", "This file defines and manages stem-specific parameters. This file is central to modeling the growth, development, and structural characteristics of plant stems. They handle various aspects such as stem growth rates, branching patterns, tropism, and stem life span.", "Stem growth dynamics, branching patterns, tropism types, stem lifespan, inter-lateral distances, nodal growth functions.", "Input: Stem-specific data and growth configuration parameters. Output: Configured stem parameters, specific stem characteristics for simulation."]
        - ["tropism.cpp", "Behavioral & Dynamic", "Defines various tropism behaviors for plant growth simulation. These modules implement tropism mechanisms like gravitropism, plagiotropism, hydrotropism, and more, allowing plants to react to environmental stimuli.", "Gravitropism, plagiotropism, hydrotropism, combined tropisms, twist tropism, antigravitropism, growth orientation based on environmental factors.", "Input: Environmental stimuli, plant growth parameters. Output: Growth direction adjustments, simulated tropism responses."]




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
    text: "Explore the world of plant shoot and root architecture with insightful talks on the C-PlantBox modeling tool. Dive into the intricate mathematics and operational intricacies that power C-PlantBox tool for simulating and analyzing whole plant growth dynamics."
    videos: 
    - videoID: "-YgDnsC3BV8"
      videoTitle: "What is C-PlantBox?"
    - videoID: "dzeV4U58BYA"
      videoTitle: "Mathematics behind C-PlantBox"
    - videoID: "-MjNsvbCf4o"
      videoTitle: "Modeling a virtual Plant"
    - videoID: "i2zisEZbxMY"
      videoTitle: "Benchmarking root and soil interaciton models"
    - videoID: "1l_ZlSl9R3I"
      videoTitle: "Axisymmetric rhizosphere models"

    textPosition: "top"    
  - name: "Youtube"
    url: "https://www.youtube.com/channel/UCPK-pFfpK94jiamgwHxX32Q"  
---
