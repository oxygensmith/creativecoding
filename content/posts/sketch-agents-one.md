---
title: "Sketch Agents"
date: 2026-01-05
draft: false
description: "OOP agents with velocity, bounce, and an animation loop."
sketches: ["sketch-agents-one"]
bordered: true
tags: ["foundations"]
categories: ["canvas"]
screenshot: "sketch-agents-one-001.webp"
---

Introduces an object-oriented agent model: a <code>Vector</code> class holds coordinates, and an <code>Agent</code> class owns a position, a velocity, and a radius. Each frame, agents move by their velocity and bounce off canvas edges with <code>vel.x \*= -1</code>. The 40 agents are seeded at random positions and sizes in the sketch's setup phase, before the render loop begins.

This is also the first animated sketch, and the animation pattern used throughout the rest of the series. Setting <code>animate: true</code> in the sketch settings tells <code>canvasSketch</code> to drive the render function with a <code>requestAnimationFrame</code> loop, passing an incrementing <code>frame</code> counter on each tick. The render function redraws the entire canvas each frame: clear, update state, draw.
