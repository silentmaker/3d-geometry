<template>
  <div id="canvas-container" ref="container">
    <video class="bg-video" loop autoplay muted src="https://img2.51vj.cn/wall_activity/fs08.mp4"></video>

    <ul class="controls">
      <li :class="{ active: mode === currentMode }" @click="currentMode = mode"
        v-for="mode in modes" :key="mode">{{ mode.toUpperCase() }}</li>
    </ul>
  </div>
</template>

<script>
import Shape from '@/utils/geometry';

export default {
  name: 'attendance',
  props: {
    avatars: Array,
    amount: Number,
  },
  data() {
    return {
      type: 'plane',
      currentMode: 'auto',
      modes: ['auto', 'plane', 'sphere', 'helix', 'cube', 'logo', 'text'],
      timer: null,
      showControl: true,
      showOptions: true,
    };
  },
  mounted() {
    this.setup();
    this.switch('auto');
    // this.$bus.$on('toggleControl', () => {
    //   this.showControl = !this.showControl;
    // });
  },
  watch: {
    currentMode: 'switch',
    avatars: 'attend',
  },
  methods: {
    setup() {
      this.canvas = document.createElement('canvas');
      this.resize();
      this.animate();
      this.$refs.container.appendChild(this.canvas);
      window.addEventListener('resize', this.resize);
    },
    resize() {
      if (this.$refs.container) {
        this.canvas.width = this.$refs.container.clientWidth;
        this.canvas.height = this.$refs.container.clientHeight;
      }
    },
    animate() {
      const { canvas, type, amount } = this;
      this.shape = new Shape({ canvas, type, amount });
    },
    switch(mode) {
      if (mode === 'auto') {
        this.timer = setTimeout(() => {
          this.type = this.modes[this.modes.indexOf(this.type) + 1];
          if (!this.type || this.type === 'auto') this.type = 'plane';
          this.shape.switchType(this.type);
          this.switch('auto');
        }, 10000);
      } else if (this.type !== mode) {
        this.type = mode;
        this.shape.switchType(this.type);
      }
      if (mode !== 'auto' && this.timer) clearTimeout(this.timer);
    },
    attend(newAvatars, oldAvatars) {
      if (newAvatars.length > 500) return;
      const isInit = oldAvatars.length === 0;
      const newAttends = isInit ? newAvatars : newAvatars.filter(item => oldAvatars.indexOf(item) === -1);
      newAttends.map((item) => {
        const image = new Image();
        image.onload = () => {
          // Previous attended avatars show immediately
          if (isInit) this.shape.randUpdate(this.shape.items, image);
          else this.shape.addPopup(image);
        };
        image.src = item;
      });
    },
  },
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
  },
};
</script>

<style lang="less">
#canvas-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateZ(0);

  .controls {
    display: flex;
    position: absolute;
    bottom: 40px;
    left: 40px;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 1;

    li {
      display: block;
      margin-right: 8px;
      padding: 4px 8px;
      border: solid 1px #fff;
      border-radius: 8px;
      color: #fff;
      font-size: 10px;
      cursor: pointer;
      transition: color,background-color .5s;

      &.active {
        color: #2C405A;
        background-color: #fff;
      }
    }
  }

  video.bg-video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
  }

  canvas {
    position: absolute;
  }
}
</style>
