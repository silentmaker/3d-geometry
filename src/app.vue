<template>
  <div id="app">
    <div>
      <span>TYPE: </span>
      <button @click="type = 'plane'">plane</button>
      <button @click="type = 'sphere'">sphere</button>
      <button @click="type = 'cylinder'">cylinder</button>
      <button @click="type = 'curve'">curve</button>
    </div>
    <div>
      <span>AMOUNT: </span>
      <input type="text" v-model.number="amount">
    </div>
    <fancy-avatars :type="type" :members="members" :amount="amount" />
  </div>
</template>

<script>
import fancyAvatars from './components/fancy-avatars.vue';
import members from './mock';

export default {
  name: 'app',
  components: {
    fancyAvatars,
  },
  data() {
    return {
      type: 'curve',
      amount: 300,
      members,
    };
  },
};
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
  background-color: #fff;
}
</style>
