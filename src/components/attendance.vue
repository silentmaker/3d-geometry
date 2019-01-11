<template>
  <div id="canvas-container" ref="container">
    <ul class="controls">
      <li>plane</li>
      <li>sphere</li>
      <li>helix</li>
      <li>cube</li>
    </ul>
  </div>
</template>

<script>
import { Shape } from '@/utils/geometry';

export default {
  name: 'attendance',
  props: {
    avatars: Array,
    amount: Number,
  },
  mounted() {
    this.setup();
  },
  methods: {
    setup() {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
      this.resize();
      this.animate();
      this.$refs.container.appendChild(this.canvas);
      // this.canvas = document.createElement('canvas');
      // this.context = this.canvas.getContext('2d');
      // this.$refs.container.appendChild(this.canvas);
      // window.addEventListener('resize', this.resize);
      // this.resize();
      // this.init();
    },
    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      // this.canvas.width = window.innerWidth;
      // this.canvas.height = window.innerHeight;
    },
    switch() {
      const { context } = this;
      if (this.shape && this.shape.destroy) this.shape.destroy();
      this.shape = new Shape({ context });
    },
  },
};
</script>

<style lang="less" scoped>
#canvas-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
