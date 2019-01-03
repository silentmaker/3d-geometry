<template>
  <div id="app">
    <fancy-avatars-canvas :size="size" :amount="amount" :type="type" :avatars="avatars" />

    <div :class="['controls', showOption ? 'active' : '']">
      <div class="control">
        <span>Type </span>
        <label for="plane">
          <input id="plane" type="radio" name="type" value="plane" v-model="type"/>
          plane
        </label>
        <label for="sphere">
          <input id="sphere" type="radio" name="type" value="sphere" v-model="type"/>
          sphere
        </label>
        <label for="cylinder">
          <input id="cylinder" type="radio" name="type" value="cylinder" v-model="type"/>
          cylinder
        </label>
      </div>
      <div class="control">
        <span>Amount </span>
        <input type="text" v-model.number="amount">
      </div>
      <div class="control">
        <span>Size </span>
        <input type="text" v-model.number="size">
      </div>
      <div class="toggle-options" @click="showOption = !showOption">
        {{ showOption ? 'Hide' : 'Show' }} Options
      </div>
    </div>
  </div>
</template>

<script>
import fancyAvatarsCanvas from './components/fancy-avatars-canvas.vue';
import members from './mock';

export default {
  name: 'app',
  components: {
    fancyAvatarsCanvas,
  },
  data() {
    return {
      type: 'sphere',
      amount: 10,
      size: 80,
      avatars: members,
      showOption: true,
    };
  },
  mounted() {
    setInterval(() => {
      this.avatars.push(`https://tinypng.com/images/example-shrunk.png?${Date.now()}`);
    }, 4000);
  },
};
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
  background-color: #2C405A;
}
.controls {
  position: fixed;
  height: 136px;
  padding: 10px;
  right: 20px;
  top: -10px;
  border: solid 3px #f1f1f2;
  background-color: #fff;
  border-radius: 10px;
  transition: transform .5s;
  transform: translateY(-105px);
  &.active {
    transform: translateY(0px);
  }
}
.control {
  background: transparent;
  padding: 5px 10px;

  label {
    padding: 0 5px;
  }
}
.toggle-options {
  cursor: pointer;
  padding: 15px 10px 0;
}
</style>
