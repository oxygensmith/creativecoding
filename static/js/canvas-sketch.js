function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function canvasSketch(sketch, settings) {
  const [maxWidth, maxHeight] = settings.dimensions;
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  const getSize = () => {
    const containerW = canvas.parentElement.clientWidth;
    const size = Math.min(containerW, maxWidth);
    return { width: size, height: Math.round(size * maxHeight / maxWidth) };
  };

  let dims = getSize();
  canvas.width = dims.width;
  canvas.height = dims.height;

  const render = sketch({ context, width: dims.width, height: dims.height });
  const renderOnce = () => render({ context, width: dims.width, height: dims.height });

  if (settings.animate) {
    let frame = 0;
    const loop = () => {
      render({ context, width: dims.width, height: dims.height, frame });
      canvas._frame = frame;
      frame++;
      requestAnimationFrame(loop);
    };
    new ResizeObserver(() => {
      dims = getSize();
      canvas.width = dims.width;
      canvas.height = dims.height;
    }).observe(canvas.parentElement);
    requestAnimationFrame(loop);
  } else {
    canvas._frame = 0;
    renderOnce();
    new ResizeObserver(() => {
      dims = getSize();
      canvas.width = dims.width;
      canvas.height = dims.height;
      renderOnce();
    }).observe(canvas.parentElement);
  }

  return { render: renderOnce };
}
