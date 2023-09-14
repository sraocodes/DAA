---
title: "GRANAR"
date: 2023-07-28
draft: false
sections:
  - name: "What is GRANAR?"
    text: "GRANAR is a model that creates detailed cell networks of root cross-sections based on a select set of root anatomical features. These features can be obtained using image analysis software like ImageJ, RootScan, PHIV-RootCell, or RootAnalyzer. The model constructs the anatomy by placing cell layers around the root's center. The position and size of each cell are determined by the cell type radius and a degree of randomness. This randomness means that even with the same input parameters, each simulation might produce slightly different anatomies. The model can simulate different vascular patterns, depending on whether it's modeling a monocot or dicot root. You can think of GRANAR like a computer program that can recreate the structure of plant roots on a cell-by-cell basis. For a more hands-on experience, explore the [official GRANAR site](https://granar.github.io/)."
    image: "images/granar_set2.gif"
    imageWidth: "600px"
    imageHeight: "400px"
    textPosition: "bottom"      

  - name: "How Does GRANAR Work?"
    text: "Imagine the root as a series of interconnected tubes (the xylem vessels) within a sponge-like structure (the root's cellular anatomy). The tubes help transport water along the length of the root, while the sponge absorbs water from the surrounding soil. GRANAR provides a detailed map of this sponge-like structure, showing where each cell and tissue is located. The primary input to GRANAR is the root cross-section images. These images are used to extract anatomical traits that serve as the foundation for the model's simulations. Let's delve deeper into how GRANAR constructs the root structure:"
    list:
      - "**Anatomical Traits**: GRANAR starts by extracting key anatomical traits from root cross-section images. These traits provide a detailed understanding of the root's anatomy."
      - "**Linear Regressions**: With the extracted anatomical traits measured along the root axes, linear regressions are computed against the distance to the root tip for each root type. These regressions help in understanding how anatomical traits change as we move along the root."
      - "**Input Parameters**: The coefficients from the linear models are used to estimate GRANAR's input parameters at every desired location along the root. If a regression between the distance along the root and the anatomical traits doesn't show significant difference from a uniform model, the average value of the anatomical traits is used."
      - "**Special Case**: For the relationship between the size of the stele and the metaxylem, a Napierian logarithmic transformation is applied on the stele area and the metaxylem. This relationship is then incorporated into the GRANAR parametrization procedure."
      - "**Simulating Sections**: With the input parameters defined, GRANAR can simulate representative root cross-sections along each root type at any longitudinal position."
      - "**Extra Details**: In addition to the root cross-sections, the locations of hydrophobic barriers and metaxylem maturation zones are added based on staining signals. This provides additional details about the root's anatomy, especially regarding water movement barriers."

    image: "images/granar1.jpg"
    imageWidth: "100px"
    imageHeight: "800px"
    textPosition: "right"

  - name: "GRANAR Features"
    text: "GRANAR is a versatile tool designed for simulating and analyzing root anatomy. Here's a glimpse of its key capabilities:"
    list:
      - "**Detailed Anatomy**: Simulates plant roots at the cellular level, focusing on individual sections."
      - "**Key Dependencies**: GRANAR is built upon several foundational packages, including [`deldir`](https://cran.r-project.org/package=deldir) [`alphahull`](https://cran.r-project.org/package=alphahull) [`retistruct`](https://cran.r-project.org/package=retistruct)"
      - "**Seamless Integration**: Features a MECHA-GRANAR connection for smooth data exchange in XML format, essential for radial conductivity calculations."
      - "**ImageJ Compatibility**: Integrates with ImageJ software for extracting anatomical features from specific datasets."
      - "**Open Data**: Advocates transparency with data available under the CC-BY 4.0 International license."
    textPosition: "left"
 
  - name: "Why GRANAR?"
    text: "GRANAR is more than just a digital tool; it's a bridge to understanding plant roots at a cellular level, offering a detailed window into the intricate cellular networks of root cross-sections. Its capability to simulate root anatomies based on select anatomical features can make it an important tool for advanced agricultural research and practices. Ref: the above image is taken from the [`GRANAR publication`](https://doi.org/10.1104/pp.19.00617)"
    list:
      - "**Detailed Root Anatomy:** Generates cell networks of root cross-sections from key anatomical features."
      - "**High Accuracy:** Reproduces root cross-section anatomies with impressive precision when compared to experimental data."
      - "**Versatility:** Can simulate different vascular patterns, catering to both monocot and dicot root structures."
      - "**Integration Potential:** Seamlessly integrates with hydraulic models like MECHA, providing a comprehensive view of root hydraulic properties."
      - "**Time Efficiency:** Dramatically reduces the time required for root anatomy simulations. While other methods can take up to 10 hours, GRANAR accomplishes the task in just 10 minutes."
    image: "images/whygranar.jpg"
    imageWidth: "800px"
    imageHeight: "400px"
    textPosition: "bottom"  
    
  - name: "Dive Deeper with GRANAR"
    text: "For those keen on exploring further, GRANAR offers a plethora of examples and use-cases. Discover more at [GRANAR examples](https://github.com/granar/granar_examples)."
    image: "images/GranarDeepDive.png"
    imageWidth: "250px"
    imageHeight: "250px"
    textPosition: "right"
---
