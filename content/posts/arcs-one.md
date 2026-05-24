---
title: "Arcs"
date: 2026-01-04
draft: false
description: "Using arcs as a generative element"
sketches: ["arcs-one"]
bordered: true
tags: ["foundations"]
categories: ["canvas"]
screenshot: "arcs-one-001.webp"
---

Further exploration into using the canvas transform pattern, but this time using a randomRange function to produce random thicknesses of lines, and <span class="mono">arc()</a> drawing.

There are two passes per iteration around the circle: first, a scaled rectangle (using the same technique as <a href="/posts/transformations-one"> Transformations</a>); second, a <span class="mono">context.arc()</span> is drawn at a randomized radius and randomized start/end angles.

The arcs' sweep and thickness are both random, so the result is dense and unpredictable — a study in using <span class="mono">arc()</span> as a generative element rather than a precise shape.

As with all examples, hit <span class="mono">&lt;enter&gt;</span> to regenerate the drawing to see the randomized features.
