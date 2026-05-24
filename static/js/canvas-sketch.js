function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function canvasSketch(sketch, settings) {
  const [width, height] = settings.dimensions;
  const canvas = document.querySelector("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  const render = sketch({ context, width, height });

  const renderOnce = () => render({ context, width, height });

  if (settings.animate) {
    let frame = 0;
    const loop = () => {
      render({ context, width, height, frame });
      canvas._frame = frame;
      frame++;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  } else {
    canvas._frame = 0;
    renderOnce();
  }

  return { render: renderOnce };
}
