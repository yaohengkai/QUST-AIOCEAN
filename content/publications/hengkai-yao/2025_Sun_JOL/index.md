---
title: "Physics informed neural network framework for time-varying wind stress drag coefficient identification in the Ekman model"
authors:
  - Yitong Sun
  - Hengkai Yao
  - Dezhou Yang
  - Tangying Lv
  - Qingliang Liu
  - Cheng Luo
  - Shanliang Zhu

author_notes:
  - ""
  - "Corresponding"
  - ""
  - ""
  - ""
  - ""
  - "Corresponding"

date: "2025-08-13T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-08-13T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-preprint"]

# Publication name and optional abbreviated publication name.
publication: "Journal of oceanology and limnology"
publication_short: "JOL"

abstract: "The Ekman equation is a fundamental model for describing the wind stress response in the ocean's upper layer,with its key parameters—the vertical eddy viscosity coefficient (VEVC) and wind stress drag coefficient (WSDC), governing vertical momentum transport within the ocean and air-sea momentum transfer. This study introduces a physics-informed neural network (PINN) model integrated with a discrete approximation method to overcome challenges in computing derivative terms under Neumann boundary conditions, enabling precise joint identification of the VEVC and time-varying WSDC. To support the model training and evaluation, especially in the absence of real-world ocean observations, a high-resolution synthetic dataset is generated using a finite difference solution of the Ekman equation, serving as the ground truth. Using this dataset, 13 numerical experiments are conducted across cases involving constant, linear, quadratic, and trigonometric time-varying WSDC and wind speed combinations. Moreover, some selected cases are used for comparisons with the traditional adjoint data assimilation method and sensitivity analyses. The results demonstrate that the PINN model accurately identifies parameters across a variety of conditions, exhibits lower errors compared to the traditional method, and maintains strong stability against initial condition perturbations. This pioneering application of the model to the Ekman equation provides a robust and generalizable approach for time-varying parameter identification, with promising applications in ocean variable forecasting and dynamics research."

# Summary. An optional shortened abstract.
summary: ""

tags:
  - AI Oceanography
  - Physical Oceanography

featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
    # doi: "10.1007/s00343-024-4122-9"

links:
  # - type: pdf
  #   url: 2021_Fu_BAMS.pdf
  # - type: code
  #   url: https://github.com/ihesp/rcesm1
  # - type: dataset
  #   url: ""
  # - type: poster
  #   url: ""
  # - type: project
  #   url: ""
  # - type: slides
  #   url: ""
  # - type: source
  #   url: ""
  # - type: video
  #   url: ""
  # - name: News
  #   url: http://grad.ouc.edu.cn/2023/0519/c15481a432747/page.htm

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: "Image credit: Yitong Sun"
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - 2024_AI_Ocean

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

---

<!-- <a href="https://www.scimagojr.com/journalsearch.php?q=21100870577&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21100870577" alt="SCImago Journal &amp; Country Rank"  /></a> -->
