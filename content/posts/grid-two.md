---
title: "Grid II"
date: 2026-01-08
draft: false
description: "Adding randomness to our grid."
sketches: ["grid-two"]
bordered: true
tags: ["animation", "grids"]
categories: ["canvas"]
screenshot: "grid-two-001.webp"
---

Grid of lines, rotated and weighted by 2D simplex noise. The noise field is sampled at each cell's position, mapping the output to a subtle angle and a line width that ranges from thin to bold. Advancing the x-coordinate of the noise sample each frame slides smoothly through the field, producing a slow, organic ripple across the grid.
