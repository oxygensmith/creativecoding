const canvas = document.getElementById("sketch-just-squares");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 4;

const width = 60;
const height = 60;
const gap = 20;
let x, y;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    x = 100 + (width + gap) * i;
    y = 100 + (height + gap) * j;

    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();

    if (Math.random() < 0.5) {
      ctx.beginPath();
      ctx.rect(x + 8, y + 8, width - 16, height - 16);
      ctx.stroke();
    }
  }
}

Math.random(); // 0 ... 1
