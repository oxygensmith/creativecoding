const settings = {
  dimensions: [600, 600],
  animate: true,
};

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getDistance(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.radius = randomRange(4, 12);
    this.vel = new Vector(randomRange(-1, 1), randomRange(-1, 1));
  }

  update(width, height) {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  bounce(width, height) {
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }

  draw(context) {
    context.fillStyle = "white";
    context.strokeStyle = "white";
    context.lineWidth = 2;

    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  }
}

const sketch = ({ width, height }) => {
  /* create agents array */
  const agents = [];
  for (let i = 0; i < 40; i++) {
    const x = randomRange(0, width);
    const y = randomRange(0, height);

    agents.push(new Agent(x, y));
  }

  return ({ context, width, height }) => {
    /* fill background */
    context.fillStyle = getCSSVar("--color-background");
    context.fillRect(0, 0, width, height);

    /* loop to store */
    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i];
      for (let j = i + 1; j < agents.length; j++) {
        const other = agents[j];

        const dist = agent.pos.getDistance(other.pos);

        if (dist > 200) continue;

        context.lineWidth = mapRange(dist, 0, 200, 12, 1);

        context.beginPath();
        context.moveTo(agent.pos.x, agent.pos.y);
        context.lineTo(other.pos.x, other.pos.y);
        context.stroke();
      }
    }

    /* drawing */
    agents.forEach((agent) => {
      agent.update(width, height);
      agent.draw(context);
      agent.bounce(width, height);
    });
  };
};

canvasSketch(sketch, settings);
