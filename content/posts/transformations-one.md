---
title: "Transformations"
date: 2026-01-03
draft: false
description: "Context transforms: shapes arranged in a circle with trigonometry."
sketches: ["transformations-one"]
bordered: true
tags: ["foundations"]
categories: ["canvas"]
screenshot: "transformations-one-001.webp"
---

Distributes thin rectangles evenly around a circle using trigonometry — <code>x = cx + radius \* Math.sin(angle)</code> — then orients each one inward with <code>context.rotate(-angle)</code>. Random horizontal scale via <code>randomRange</code> gives each element a different width on every load.

This sketch introduces the transform pattern used in every subsequent canvas example: <code>context.save()</code> isolates the current state, a series of <code>context.translate()</code> and <code>context.rotate()</code> calls moves and orients the drawing context. This allows the shape to be drawn at the origin, making for cleaner code and fewer required calculations. Then, <code>context.restore()</code> resets everything for the next element. This keeps each element's transforms from compounding into one another.

As with all examples, hit <span class="mono">&lt;enter&gt;</span> to regenerate the drawing to see the randomized features.
