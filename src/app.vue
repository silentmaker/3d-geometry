<template>
  <attendance :avatars="avatars" :amount="amount" />
</template>

<script>
import attendance from '@/components/attendance.vue';
import { rand } from '@/utils/helpers';

export default {
  name: 'app',
  components: {
    attendance,
  },
  data() {
    return {
      avatars: [],
      amount: 100,
      options: {
        amount: 200,
      },
      timer: null,
      rand,
    };
  },
  mounted() {
    // this.simulate();
  },
  methods: {
    simulate() {
      this.timer = setTimeout(() => {
        let count = this.rand(2, 5);
        const newAttends = [];
        console.log(`simulating ${count} attendances at total ${this.avatars.length}`);
        while (count > 0) {
          newAttends.push('http://i.pravatar.cc/100');
          count -= 1;
        }
        this.avatars = this.avatars.concat(newAttends);
        if (this.avatars.length < this.amount) this.simulate();
      }, this.rand(5, 8) * 1000);
    },
  },
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
  },
};
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
  background-color: #2C405A;
}
</style>
