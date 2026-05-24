const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = getCSSVar("--color-background");
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "white";
    context.lineWidth = width * 0.017;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() < 0.5) {
          context.beginPath();
          context.rect(x + off, y + off, w - off * 2, h - off * 2);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
