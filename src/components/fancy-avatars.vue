<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from 'three';
import defaultOne from '../assets/images/default1.png';
import defaultTwo from '../assets/images/default2.png';
import defaultThree from '../assets/images/default3.png';
import defaultFour from '../assets/images/default4.png';

export default {
  name: 'fancy-avatars',
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
  data() {
    return {
      needUpdated: false,
    };
  },
  mounted() {
    if (this.checkWebGL()) {
      this.setup();
      this.initAvatars();
      this.animate();
      window.addEventListener('resize', this.resize, false);
    } else {
      document.body.innerHTML = 'Please use a modern browser to enable WebGL.';
    }
  },
  watch: {
    type: 'requestUpdate',
    amount: 'requestUpdate',
    size: 'requestUpdate',
  },
  methods: {
    requestUpdate() {
      this.needUpdated = true;
    },
    checkWebGL() {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    },
    setup() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(60,
        window.innerWidth / window.innerHeight, 1, 2000);
      this.camera.position.z = 1500;
      this.scene.fog = new THREE.Fog(0xffffff, 1600, 2000);
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setClearColor(0xffffff, 0);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.$refs.container.appendChild(this.renderer.domElement);
    },
    initAvatars() {
      const defaults = [defaultOne, defaultTwo, defaultThree, defaultFour];
      this.avatarImages = defaults.map(item => new THREE.TextureLoader().load(item));
      this.group = new THREE.Group();
      switch (this.type) {
        case 'plane':
          this.initPlaneGroup();
          break;
        case 'sphere':
          this.initSphereGroup();
          break;
        case 'cylinder':
          this.initCylinderGroup();
          break;
        case 'curve':
          this.initCurveGroup();
          break;
        default:
          this.initSphereGroup();
          break;
      }
    },
    initPlaneGroup() {
      const distance = this.size * 1.5;
      const rowLimit = Math.floor(window.innerWidth * 2 / distance) - 2;
      for (let i = 0; i < this.amount; i += 1) {
        const x = ((i % rowLimit) + 2) * distance - window.innerWidth;
        const y = (-Math.floor(i / rowLimit) - 2) * distance + window.innerHeight;
        const z = 10;
        const index = Math.floor(Math.random() * 4);
        const material = new THREE.SpriteMaterial({ map: this.avatarImages[index] });
        const avatar = new THREE.Sprite(material);
        avatar.position.set(x, y, z);
        this.group.add(avatar);
      }
      this.scene.add(this.group);
    },
    initSphereGroup() {
      for (let i = 0; i < this.amount; i += 1) {
        const phi = Math.acos(-1 + (2 * i) / this.amount);
        const theta = Math.sqrt(this.amount * Math.PI) * phi;
        const x = Math.cos(theta) * Math.sin(phi);
        const y = Math.sin(theta) * Math.sin(phi);
        const z = Math.cos(phi);
        const index = Math.floor(Math.random() * 4);
        const material = new THREE.SpriteMaterial({ map: this.avatarImages[index] });
        const avatar = new THREE.Sprite(material);
        avatar.position.set(x, y, z);
        avatar.position.normalize();
        avatar.position.multiplyScalar(window.innerHeight * 0.6);
        this.group.add(avatar);
      }
      this.scene.add(this.group);
    },
    initCylinderGroup() {
      for (let i = 0; i < this.amount; i += 1) {
        const phi = (i % 30) / 30 * 2 * Math.PI;
        const x = Math.cos(phi);
        const y = -i / 100;
        const z = Math.sin(phi);
        const index = Math.floor(Math.random() * 4);
        const material = new THREE.SpriteMaterial({ map: this.avatarImages[index] });
        const avatar = new THREE.Sprite(material);
        avatar.position.set(x, y, z);
        avatar.position.multiplyScalar(window.innerHeight * 0.5);
        this.group.add(avatar);
      }
      this.scene.add(this.group);
    },
    initCurveGroup() {
      const separation = 100;
      const amountX = 16;
      for (let i = 0; i < this.amount; i += 1) {
        const x = (i % amountX) * separation - window.innerWidth / 2;
        const z = Math.floor(i / amountX) * -separation / 2;
        const y = (Math.sin(x) + Math.sin(z)) * 300;
        const index = Math.floor(Math.random() * 4);
        const material = new THREE.SpriteMaterial({ map: this.avatarImages[index] });
        const avatar = new THREE.Sprite(material);
        avatar.position.set(x, y, z + 300);
        this.group.add(avatar);
      }
      this.scene.add(this.group);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.render();
    },
    render() {
      const time = Date.now() / 1000;
      const l = this.group.children.length;
      for (let i = 0; i < l; i += 1) {
        const avatar = this.group.children[i];
        const { material } = avatar;
        const scale = Math.sin(time + avatar.position.x * 0.01) * 0.2 + 1.0;
        const imageWidth = this.size;
        avatar.scale.set(scale * imageWidth, scale * imageWidth, 1.0);
        material.opacity = Math.sin(time + avatar.position.x * 0.01) * 0.2 + 0.9;
      }
      if (this.type === 'sphere') {
        this.group.rotation.x = time * 0.06;
        this.group.rotation.y = time * 0.12;
        this.group.rotation.z = time * 0.18;
      }
      if (this.type === 'cylinder') {
        // TODO: trun back
        this.group.position.y += 0.5;
        this.group.rotation.y = time * 0.15;
      }
      if (this.type === 'curve') {
        this.group.rotation.y = time * 0.15;
        this.group.rotation.z = time * 0.15;
      }
      if (this.needUpdated) {
        this.scene.remove(this.group);
        this.initAvatars();
        this.needUpdated = false;
      }
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
    },
    resize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
  },
};
</script>

<style scoped lang="less">
</style>
