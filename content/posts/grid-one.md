---
title: "Grid I"
date: 2026-01-07
draft: false
description: "An efficient and flexible way of describing a grid."
sketches: ["grid-one"]
bordered: true
tags: ["foundations", "grids"]
categories: ["canvas"]
screenshot: "grid-one-001.webp"
---

The core grid pattern used throughout this series: a flat array of numCells is indexed with <code>col = i % cols</code> and <code>row = Math.floor(i / cols)</code>, and the grid is centered on the canvas with margin offsets. Each cell gets a context.save() / translate / draw / context.restore() cycle. Here it draws a single horizontal stroke at each cell center.
