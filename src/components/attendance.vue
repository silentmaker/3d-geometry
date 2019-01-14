<template>
  <div id="canvas-container" ref="container">
    <ul class="controls">
      <li :class="{ active: type === currentType }"
        v-for="type in types" :key="type">{{ type.toUpperCase() }}</li>
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
  data() {
    return {
      types: ['plane', 'sphere', 'helix', 'cube'],
      currentType: 'sphere',
    };
  },
  mounted() {
    this.setup();
  },
  methods: {
    setup() {
      this.canvas = document.createElement('canvas');
      this.resize();
      this.animate(this.currentType);
      this.$refs.container.appendChild(this.canvas);
      window.addEventListener('resize', this.resize);
    },
    resize() {
      this.canvas.width = this.$refs.container.clientWidth;
      this.canvas.height = this.$refs.container.clientHeight;
    },
    animate(type) {
      const { canvas } = this;
      this.shape = new Shape({ canvas, type });
      // this.shape.setItems(this.items);
    },
    switch(type) {
      if (this.shape && this.shape.destroy) this.shape.destroy();
      this.animate(type);
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
  transform: translateZ(0);

  .controls {
    position: absolute;
    top: 20px;
    left: 40px;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      display: block;
      margin-bottom: 4px;
      padding: 4px 8px;
      border: solid 1px #fff;
      border-radius: 8px;
      color: #fff;
      font-size: 12px;
      cursor: pointer;

      &.active {
        color: #2C405A;
        background-color: #fff;
      }
    }
  }
}
</style>
