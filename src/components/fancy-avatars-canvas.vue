<template>
  <div ref="container"></div>
</template>

<script>
import defaultAvatar from '../assets/images/default1.png';

export default {
  name: 'fancy-avatars-canvas',
  props: {
    type: {
      type: String,
      default: 'sphere',
    },
    amount: {
      type: Number,
      default: 200,
    },
    size: {
      type: Number,
      default: 80,
    },
    avatars: {
      type: Array,
      default: () => ([]),
    },
  },
  mounted() {
    this.setup();
    window.addEventListener('resize', this.resize);
  },
  watch: {
    avatars: 'init',
  },
  methods: {
    shuffle(a) {
      let j, x, i;
      for (i = a.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    },
    setup() {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
      this.resize();
      this.rotation = 0;
      this.translate = 0;
      this.direction = 1;
      this.time = 0;
      this.particles = [];
      this.init();
      this.animate();
      this.$refs.container.appendChild(this.canvas);
    },
    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    },
    init() {
      if (this.avatars.length > this.amount) return;
      if (!this.particles.length) {
        const particles = [];
        for (let i = 0; i < this.amount; i += 1) {
          const image = new Image();
          image.src = this.avatars[i] || defaultAvatar;
          particles.push({
            image, x: 0, y: 0, z: 0, isDefault: !this.avatars[i],
          });
        }
        this.particles = this.shuffle(particles);
        this.shownAvatars = this.avatars.slice();
      } else {
        const newAvatars = this.avatars.filter(avatar => this.shownAvatars.indexOf(avatar) === -1);
        this.shownAvatars = this.avatars.slice();
        newAvatars.map(avatar => this.addParticle(avatar));
      }
    },
    addParticle(avatar) {
      let index = Math.floor(Math.random() * this.amount);
      const image = new Image();
      image.src = avatar;
      while (!this.particles[index].isDefault) {
        index += 1;
        if (index === this.amount) index = 0;
      }
      this.particles.splice(index, 1, {
        image, x: 0, y: 0, z: 0, isDefault: false,
      });
    },
    animate() {
      this.render();
      this.time += 0.01;
      if (this.time > Number.MAX_VALUE) this.time = 0;
      requestAnimationFrame(this.animate);
    },
    render() {
      this.calc();
      this.context.clearRect(0, 0, this.width, this.height);
      this.particles.map((item) => {
        const scale = Math.sin(this.time + (item.x + item.y) * 0.02) * 0.1 + 1.0;
        const size = this.size * scale;

        this.context.save();

        this.context.beginPath();
        this.context.arc(item.x, item.y, size / 2, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        this.context.stroke();

        this.context.clip();
        this.context.globalAlpha = item.z / 2 + 0.5;
        this.context.drawImage(item.image, item.x - size / 2, item.y - size / 2, size, size);
        this.context.scale(2, 2);
        this.context.restore();
        return false;
      });
    },
    calc() {
      switch (this.type) {
        case 'plane':
          this.calcPlane();
          break;
        case 'cylinder':
          this.rotation += 0.005;
          if (this.rotation > 2 * Math.Pi) this.rotation = 0;
          this.translate += 1 * this.direction;
          if (this.translate < 0 || this.translate > this.height / 2) this.direction = -this.direction;
          this.calcCylinder();
          break;
        default:
          this.rotation += 0.005;
          if (this.rotation > 2 * Math.Pi) this.rotation = 0;
          this.calcSphere();
          break;
      }
    },
    calcSphere() {
      const scalar = this.height * 0.4;

      for (let i = 0; i < this.amount; i += 1) {
        const phi = Math.acos(-1 + (2 * i) / this.amount);
        const theta = Math.sqrt(this.amount * Math.PI) * phi - this.rotation;

        this.particles[i].x = this.width / 2 + Math.cos(theta) * Math.sin(phi) * scalar;
        this.particles[i].y = this.height / 2 + Math.cos(phi) * scalar;
        this.particles[i].z = Math.sin(theta) * Math.sin(phi);
      }
    },
    calcCylinder() {
      const scalar = this.width * 0.2;
      const count = 20;
      const gap = 20;

      for (let i = 0; i < this.amount; i += 1) {
        const phi = (i % count) / count * 2 * Math.PI - this.direction * this.rotation;

        this.particles[i].x = this.width / 2 + Math.cos(phi) * scalar;
        this.particles[i].y = this.height / 2 + i / count * (this.size + gap) - this.translate;
        this.particles[i].z = Math.sin(phi);
      }
    },
    calcPlane() {
      const gap = this.size / 8;
      const unit = this.size + 2 * gap;
      const count = Math.floor(this.width / unit);

      for (let i = 0; i < this.amount; i += 1) {
        this.particles[i].x = (i % count) * unit + this.size / 2 + gap;
        this.particles[i].y = Math.floor(i / count) * unit + this.size;
        this.particles[i].z = 1;
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  },
};
</script>
