const rand = (min, max) => Math.round(Math.random() * (max - min)) + min;

const tween = (from, to) => from - to;

export {
  rand,
  tween,
};
