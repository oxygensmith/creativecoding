---
title: "Sketch Agents II"
date: 2026-01-06
draft: false
description: "Using sketch agents and connecting them with lines."
sketches: ["sketch-agents-two"]
bordered: true
tags: ["featured", "agents", "animation"]
categories: ["canvas"]
screenshot: "sketch-agents-two-001.webp"
---

This drawing extends our agent system we initiated <a href="/posts/sketch-agents-one/">in the previous drawing</a> with proximity-based connections. A <span class="mono">getDistance()</span> method on <span class="mono">Vector</span> drives a nested loop comparing every agent pair — if two agents are within 200px, a line is drawn between them. Line weight is mapped from distance: <code>mapRange(dist, 0, 200, 12, 1)</code> — bold when close, hairline when far.
