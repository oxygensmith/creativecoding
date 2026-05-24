---
title: "Grid with GUI"
date: 2026-01-09
draft: false
description: "Adding a GUI to our animated grid."
sketches: ["grid-with-gui"]
bordered: true
tweakpane: true
tags: ["featured", "gui", "noise", "grids", "animation"]
categories: ["canvas"]
screenshot: "grid-with-gui-004.webp"
---

This example builds on <a href="/posts/grid-two/">Grid II</a> with two differences: First, the grid-with-noise is made interactive via TweakPane. All parameters (cols, rows, freq, amp, lineCap, animate) are live-tweakable mid-animation.

Second, we replace 2D simplex-noise (which scrolls the field horizontally) with 3D noise. The <code>frame</code> counter is fed in as the z-axis, so instead of the field sliding in a direction, the whole grid evolves in place — a more undulating, organic movement.
