---
title: "Text Properties II"
date: 2026-01-11
draft: false
description: "Text functions combined with noise."
sketches: ["text-two"]
bordered: true
tweakpane: false
tags: ["text", "featured"]
categories: ["canvas"]
screenshot: "text-two-005.webp"
---

Rasterizes a letter to a tiny off-screen canvas (one pixel per grid cell), then reads back the pixel data with <span class="mono">getImageData</span>. Each cell's RGBA values color a circle on the main canvas — so what looks like a blocky letterform is actually a grid of individually-colored dots.

Pressing any key redraws the grid for that character.
