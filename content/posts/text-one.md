---
title: "Text Properties"
date: 2026-01-10
draft: false
description: "Canvas text functions demonstrated."
sketches: ["text-one"]
bordered: true
tweakpane: false
tags: ["text", "foundations"]
categories: ["canvas"]
screenshot: "text-one-001.webp"
---

This example is my study of <span class="mono">context.measureText()</span> — the Canvas API's way of getting a glyph's actual rendered bounding box (not the font's em-square). The metrics are used to center a giant character precisely.

A <span class="mono">keyup</span> listener swaps the letter live (try pressing letters on the keyboard).

The sketch uses an async <span class="mono">canvasSketch</span> call that returns a <span class="mono">manager</span> handle, enabling programmatic re-renders without a page reload.
