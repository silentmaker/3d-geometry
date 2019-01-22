<template>
  <div id="canvas-container" ref="container">
    <video class="bg-video" loop autoplay muted src="https://img2.51vj.cn/wall_activity/fs08.mp4"></video>

    <ul :class="['option-list', showOptions ? '' : 'hide']">
      <li @click="switchType(index)"
        v-for="(mode, index) in modes" :key="mode.type">
        <span :class="['option-icon', mode.type]"></span>
        <span>{{ mode.name }}</span>
      </li>
    </ul>

    <div :class="['current-option', showControl ? '' : 'hide']" @click="showOptions = !showOptions">
      <span :class="['option-icon', modes[modeIndex].type]"></span>
      <span>{{ modes[modeIndex].name }}</span>
    </div>
  </div>
</template>

<script>
import Shape from '@/utils/geometry';

export default {
  name: 'attendance',
  props: {
    avatars: Array,
    amount: Number,
    text: String,
    logo: String,
  },
  data() {
    return {
      typeIndex: 1,
      modeIndex: 0,
      modes: [
        { type: 'auto', name: '自动' },
        { type: 'plane', name: '矩阵' },
        { type: 'sphere', name: '地球' },
        { type: 'helix', name: '圆柱' },
        { type: 'cube', name: '立方体' },
        { type: 'logo', name: 'LOGO' },
        { type: 'text', name: '文字' },
      ],
      timer: null,
      showControl: true,
      showOptions: false,
    };
  },
  mounted() {
    this.setup();
    this.switchType(0);
    // this.$bus.$on('toggleControl', () => {
    //   this.showControl = !this.showControl;
    // });
  },
  watch: {
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
      const { canvas, modes, typeIndex, amount, text, logo } = this;
      const { type } = modes[typeIndex];
      this.shape = new Shape({ canvas, type, amount, text, logo });
    },
    switchType(modeIndex) {
      this.modeIndex = modeIndex;
      this.showOptions = false;
      if (modeIndex === 0) {
        this.timer = setTimeout(() => {
          this.typeIndex += 1;
          if (this.typeIndex > this.modes.length - 1) this.typeIndex = 1;
          this.shape.switchType(this.modes[this.typeIndex].type);
          this.switchType(0);
        }, 10000);
      } else if (modeIndex !== this.typeIndex) {
        this.typeIndex = modeIndex;
        this.shape.switchType(this.modes[this.typeIndex].type);
      }
      if (modeIndex !== 0 && this.timer) clearTimeout(this.timer);
    },
    attend(newAvatars, oldAvatars) {
      if (newAvatars.length > 500) return;
      const isInit = oldAvatars.length === 0;
      const newAttends = isInit ? newAvatars : newAvatars.filter(item => oldAvatars.indexOf(item) === -1);
      newAttends.map((item) => {
        const image = new Image();
        const title = 'Somebody';
        image.onload = () => {
          // Previous attended avatars show immediately
          if (isInit) this.shape.randUpdate(this.shape.items, image);
          else this.shape.addPopup({ image, title });
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

  .option-list {
    position: absolute;
    bottom: 184px;
    right: 130px;
    width: 150px;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, .6);
    border-radius: 8px;
    list-style: none;
    z-index: 1;
    overflow: hidden;
    transition: opacity .5s;

    &.hide { opacity: 0; }
    li {
      display: block;
      padding: 10px 0;
      color: #fff;
      font-size: 16px;
      text-indent: 36px;
      cursor: pointer;
      font-family: 'Microsoft YaHei';
      transition: background-color .5s;

      &:hover { background-color: rgba(255, 255, 255, .2); }
    }
  }
  .current-option {
    position: absolute;
    bottom: 122px;
    right: 130px;
    width: 150px;
    padding: 10px 0;
    background-color: rgba(0, 0, 0, .6);
    border-radius: 30px;
    text-indent: 36px;
    font-size: 16px;
    color: #fff;
    font-family: 'Microsoft YaHei';
    cursor: pointer;
    z-index: 1;
    transition: opacity .5s;

    &.hide { opacity: 0; }
  }
  .option-icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    background-image: url(../assets/images/sprites-screen-option.png);
    &.plane { background-position: -47px 0; }
    &.sphere { background-position: -95px 0; }
    &.helix { background-position: -142px 0; }
    &.cube { background-position: -142px 0; }
    &.logo { background-position: -184px 0; }
    &.text { background-position: -230px 0; }
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
