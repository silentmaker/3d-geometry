import { rand, tween } from './helpers';
import defaultAvatar from '../assets/images/default-screen-avatar.png';
import defaultLogo from '../assets/images/default-screen-logo.png';

const createItem = () => ({ x: 0, y: 0, z: 0, image: null });

const randUpdate = (items, image) => {
  let index = rand(0, items.length - 1);
  while (items[index].image) {
    if (index >= items.length - 1) index = 0;
    index += 1;
  }
  items[index].image = image;
};

const defaultImage = new Image();
defaultImage.src = defaultAvatar;

class Shape {
  constructor({ canvas, type, amount, text, logo }) {
    const logoImage = new Image();
    logoImage.onload = () => this.initPixelItems('logo');
    logoImage.src = logo || defaultLogo;
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.type = type;
    this.amount = amount;
    this.text = text || '乐享';
    this.logo = logoImage;
    this.size = 64;
    this.timer = 0;
    this.duration = 60;
    this.rotation = { rx: 0, ry: 0 };
    this.translate = { tx: 0, ty: 0, direction: 1 };
    this.popup = { images: [], titles: [], timer: 0, duration: 120, count: 0 };
    this.items = [];
    this.logoBuffer = [];
    this.textBuffer = [];
    this.logoItems = [];
    this.textItems = [];
    this.randUpdate = randUpdate;
    this.createItem = createItem;
    this.initItems();
    this.paint = this.paint.bind(this);
    requestAnimationFrame(this.paint);
  }

  initItems() {
    const items = [];
    for (let i = 0; i < this.amount; i++) {
      const item = this.createItem();
      this.resetItem(item, i, true);
      items.push(item);
    }
    this.items = items;
    this.initPixelItems('text');
  }

  initPixelItems(type) {
    const { items } = this;
    this.initPixelBuffer(type);
    this[`${type}Buffer`].map((pixel, index) => {
      const item = items[index] || this.createItem();
      this[`${type}Items`].push(item);
    });
  }

  initPixelBuffer(type) {
    const { text, logo } = this;
    const { width, height } = this.canvas;
    const tempCanvas = document.createElement('canvas');
    const tempContext = tempCanvas.getContext('2d');
    const size = 24;
    tempCanvas.width = width;
    tempCanvas.height = height;
    if (type === 'text') {
      const fontSize = width / (text.length + 1);
      tempContext.textAlign = 'center';
      tempContext.textBaseline = 'middle';
      tempContext.font = `bold ${fontSize}px arial`;
      tempContext.fillText(text, width / 2, height / 2);
    } else if (type === 'logo') {
      const ratio = logo.width / logo.height;
      const logoWidth = height * 0.6;
      const logoHeight = logoWidth * ratio;
      tempContext.drawImage(logo, width / 2 - logoHeight / 2, height / 2 - logoHeight / 2, logoWidth, logoHeight);
    }
    const pixelData = new Uint32Array(tempContext.getImageData(0, 0, width, height).data.buffer);
    for (let y = 0; y < height; y += size) {
      for (let x = 0; x < width; x += size) {
        if (pixelData[y * width + x]) this[`${type}Buffer`].push({ x, y, z: 1 });
      }
    }
  }

  resetItem(item, i, random = false) {
    const { width, height } = this.canvas;
    const { x, y, z } = item;
    this.calcItem(item, i);
    item.targetX = item.x;
    item.targetY = item.y;
    item.targetZ = item.z;
    item.x = random ? rand(0, width) : x;
    item.y = random ? rand(0, height) : y;
    item.z = random ? 1 : z;
  }

  tweenItem(item) {
    const { x, y, z, targetX, targetY, targetZ } = item;
    const { timer, duration, type } = this;
    if (timer === 0) {
      item.beginX = x;
      item.beginY = y;
      item.beginZ = z;
    }
    if (timer !== duration || type === 'text' || type === 'logo') {
      item.x = tween(timer, item.beginX, targetX, duration, 'ease-in');
      item.y = tween(timer, item.beginY, targetY, duration, 'ease-in');
      item.z = tween(timer, item.beginZ, targetZ, duration, 'ease-in');
    }
  }

  paintItem(item) {
    this.tweenItem(item);
    const { x, y, z, image } = item;
    const { size, context } = this;
    const itemSize = size * (1 + Math.sin(Date.now() / 300 + x * 0.01) * 0.2);
    const halfSize = itemSize / 2;
    context.save();
    context.globalAlpha = z / 4 + 0.75;
    context.beginPath();
    context.arc(x, y, halfSize, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();
    context.fillStyle = 'rgba(0, 0, 0, 0.3)';
    context.fill();
    context.drawImage(image || defaultImage, x - halfSize, y - halfSize, itemSize, itemSize);
    context.restore();
  }

  calcItem(item, index) {
    const { type } = this;
    if (type === 'logo' || type === 'text') {
      item.x = this[`${type}Buffer`][index].x;
      item.y = this[`${type}Buffer`][index].y;
      item.z = this[`${type}Buffer`][index].z;
    } else if (type && this[`${type}Calc`]) {
      this[`${type}Calc`](item, index);
    }
  }

  planeCalc(item, index) {
    const { width, height } = this.canvas;
    const unit = 72;
    const tempX = Math.floor(index % 24) - 11.5;
    const tempY = Math.floor(index / 24) - 4;

    item.x = width / 2 + tempX * unit;
    item.y = height / 2 + tempY * unit;
    item.z = 1;
  }

  sphereCalc(item, index) {
    const { width, height } = this.canvas;
    const { rx, ry } = this.rotation;
    const scalar = height * 0.34;
    const phi = Math.acos(-1 + (2 * index) / this.amount);
    const theta = Math.sqrt(this.amount * Math.PI) * phi + rx;
    const tempX = Math.cos(theta) * Math.sin(phi) * scalar;
    const tempY = Math.cos(phi) * scalar;
    item.x = width / 2 + (tempX * Math.sin(ry) + tempY * Math.cos(ry));
    item.y = height / 2 + (tempX * Math.cos(ry) - tempY * Math.sin(ry));
    item.z = Math.sin(theta) * Math.sin(phi);
  }

  helixCalc(item, index) {
    const { amount } = this;
    const { width, height } = this.canvas;
    const { rx, ry } = this.rotation;
    const { ty, direction } = this.translate;
    const limit = 30;
    const gap = 100;
    const scalar = height * 0.3;
    const alpha = (index % limit) / limit * 2 * Math.PI - rx;
    item.x = width / 2 + Math.cos(alpha) * scalar;
    item.y = height / 2 + index / limit * gap - ry * 10 - ty;
    item.z = Math.sin(alpha);
    if ((index === (amount - 1)
      && item.y < height / 2)
      || (index === 0 && item.y > height / 2)
    ) this.translate.direction = -direction;
  }

  cubeCalc(item, index) {
    const { width, height } = this.canvas;
    const { rx, ry } = this.rotation;
    const unit = 84;
    const tempX = (index % 36 % 6) - 2.5;
    const tempY = Math.floor((index % 36) / 6) - 2.5;
    const tempZ = Math.floor(index / 36) - 2.5;
    const transX = tempX * Math.sin(ry) + tempZ * Math.cos(ry);
    let transZ = tempX * Math.cos(ry) - tempZ * Math.sin(ry);
    const transY = tempY * Math.sin(rx) + transZ * Math.cos(rx);
    transZ = tempY * Math.cos(rx) - transZ * Math.sin(rx);
    item.x = width / 2 + transX * unit;
    item.y = height / 2 + transY * unit;
    item.z = transZ / 2.5;
  }

  switchType(type) {
    this.type = type;
    this.timer = 0;
    if (type === 'text' || type === 'logo') {
      this.size = 24;
      this[`${type}Items`].map((item, index) => this.resetItem(item, index, true));
    } else {
      this.size = 64;
      this.items.map((item, index) => this.resetItem(item, index));
    }
    this.duration = 60;
  }

  addPopup({ image, title }) {
    this.popup.images.push(image);
    this.popup.titles.push(title);
  }

  popupItem() {
    const { type, context } = this;
    const { width, height } = this.canvas;
    const { images, titles, timer, duration, count } = this.popup;
    const items = (type === 'text' || type === 'logo') ? this[`${type}Items`] : this.items;
    if (count > items.length) return;
    const size = tween(timer, 0, 300, duration / 2, 'ease-out');
    context.save();
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = '#ffffff';
    context.font = `bold ${size / 8}px 'microsoft yahei'`;
    context.fillText(titles[0], width / 2, height / 2 + size * 0.64);
    context.beginPath();
    context.arc(width / 2, height / 2, size / 2, 0, Math.PI * 2, true);
    context.closePath();
    context.shadowColor = '#ffffff';
    context.shadowBlur = 15;
    context.stroke();
    context.beginPath();
    context.arc(width / 2, height / 2, size / 2, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();
    context.drawImage(images[0], (width - size) / 2, (height - size) / 2, size, size);
    context.restore();
    this.popup.timer += 1;
    if (this.popup.timer === duration) {
      this.randUpdate(items, this.popup.images.shift());
      this.popup.titles.shift();
      this.popup.timer = 0;
      this.popup.count += 1;
    }
  }

  paint() {
    const { context, timer, duration, type } = this;
    const { width, height } = this.canvas;
    const { images } = this.popup;
    const { rx, ry } = this.rotation;
    context.clearRect(0, 0, width, height);
    if (type === 'text' || type === 'logo') {
      this[`${type}Items`].map(item => this.paintItem(item));
    } else {
      this.items.map((item, index) => {
        if (timer === duration) this.calcItem(item, index);
        this.paintItem(item);
      });
    }
    if (images.length) this.popupItem();
    // update timer & rotation & translate
    this.rotation.rx = rx > 2 * Math.PI ? 0 : rx + 0.01;
    this.rotation.ry = ry > 2 * Math.PI ? 0 : ry + 0.01;
    if (type === 'helix') {
      this.translate.tx += this.translate.direction * 1;
      this.translate.ty += this.translate.direction * 1;
    }
    if (timer !== duration) this.timer += 1;
    requestAnimationFrame(this.paint);
  }

  destroy() {
    this.paint = null;
  }
}

export default Shape;
