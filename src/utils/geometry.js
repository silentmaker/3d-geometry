import { rand, tween } from './helpers';

class Avatar {
  constructor({ context }) {
    this.image = null;
    this.context = context;
    this.timer = 0;
    this.duration = 0;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.size = 64;
  }

  calc() {
    const { x, y, z, targetX, targetY, targetZ, timer, duration } = this;
    if (timer === 0) {
      this.beginX = x;
      this.beginY = y;
      this.beginZ = z;
    }
    if (timer !== duration) {
      // transition animation
      this.x = tween(this.timer, this.beginX, targetX, duration, 'linear');
      this.y = tween(this.timer, this.beginY, targetY, duration, 'linear');
      this.z = tween(this.timer, this.beginZ, targetZ, duration, 'linear');
      this.timer += 1;
    }
  }

  paint() {
    this.calc();
    const { x, y, z, image, size, context } = this;
    context.save();
    context.globalAlpha = z / 2 + 0.5;
    context.beginPath();
    context.arc(x, y, size / 2, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();
    context.fillStyle = 'rgba(0, 0, 0, 0.4)';
    context.fill();
    if (image) {
      context.drawImage(image, x - size / 2, y - size / 2, size, size);
    } else {
      context.beginPath();
      context.arc(x, y, 2, 0, Math.PI * 2, true);
      context.fillStyle = '#ffffff';
      context.fill();
      context.closePath();
    }
    context.restore();
  }
}

class Shape {
  constructor({ canvas, type }) {
    this.context = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.type = type;
    this.amount = 125;
    this.rotation = { rx: 0, ry: 0 };
    this.items = this.initItems();
    this.paint = this.paint.bind(this);
    requestAnimationFrame(this.paint);
  }

  initItems() {
    const items = [];
    const { context, width, height } = this;
    for (let i = 0; i < this.amount; i++) {
      const item = new Avatar({ context });
      item.x = rand(0, width);
      item.y = rand(0, height);
      item.z = 1;
      this.resetItem(item, i);
      items.push(item);
    }
    return items;
  }

  resetItem(item, i) {
    const position = this.calcItem(i);
    item.targetX = position.x;
    item.targetY = position.y;
    item.targetZ = position.z;
    item.duration = 60;
    item.timer = 0;
  }

  calcItem(i, stable = false) {
    const { type } = this;
    if (type && this[type]) return this[type](i, stable);
    return this.sphere(i, stable);
  }

  sphere(i, stable = false) {
    const { width, height, rotation } = this;
    const { rx } = rotation;
    const scalar = height * 0.32;
    const phi = Math.acos(-1 + (2 * i) / this.amount);
    const theta = Math.sqrt(this.amount * Math.PI) * phi + (stable ? rx : 0);

    return {
      x: width / 2 + Math.cos(theta) * Math.sin(phi) * scalar,
      y: height / 2 + Math.cos(phi) * scalar,
      z: Math.sin(theta) * Math.sin(phi),
    };
  }

  paint() {
    const { context, width, height, rotation } = this;
    const { rx, ry } = rotation;
    context.clearRect(0, 0, width, height);
    this.rotation.rx = rx > 2 * Math.PI ? 0 : rx + 0.005;
    this.rotation.ry = ry > 2 * Math.PI ? 0 : ry + 0.005;
    this.items.map((item, index) => {
      if (item.timer === item.duration) {
        const position = this.calcItem(index, true);
        item.x = position.x;
        item.y = position.y;
        item.z = position.z;
      }
      item.paint();
    });
    requestAnimationFrame(this.paint);
  }

  destroy() {
    this.paint = null;
  }
}

export {
  Avatar,
  Shape,
};
