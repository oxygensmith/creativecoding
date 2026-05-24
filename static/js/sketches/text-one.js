const settings = {
  dimensions: [600, 600],
};

let manager;

let text = "A";
let fontFamily = "serif";

const sketch = ({ width, height }) => {
  return ({ context, width, height, frame }) => {
    /* fill background */
    context.fillStyle = getCSSVar("--color-background");
    context.fillRect(0, 0, width, height);

    /* add text */
    const fontSize = Math.min(width, height) * 1.3;
    context.fillStyle = "white";
    context.font = `${fontSize}px ${fontFamily}`;
    context.textBaseline = "top";

    const metrics = context.measureText(text);
    const mx = metrics.actualBoundingBoxLeft * -1;
    const my = metrics.actualBoundingBoxAscent * -1;
    const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
    const mh =
      metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    const x = (width - mw) * 0.5 - mx;
    const y = (height - mh) * 0.5 - my;

    context.save();
    context.translate(x, y);
    context.beginPath();
    context.rect(mx, my, mw, mh);
    context.strokeStyle = "red";
    context.stroke();

    context.fillText(text, 0, 0);
    context.restore();
  };
};

const onKeyUp = (e) => {
  if (e.key.length !== 1) return;
  text = e.key.toUpperCase();
  manager.render();
};

document.addEventListener("keyup", onKeyUp);

const start = async () => {
  manager = await canvasSketch(sketch, settings);
};

start();
