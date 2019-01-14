const rand = (min, max) => Math.round(Math.random() * (max - min)) + min;

const tween = (time, begin, end, duration, mode) => {
  switch (mode) {
    case 'ease-out':
      return -(end - begin) * (time / duration) * (time / duration - 2) + begin;
    case 'ease-in':
      return (end - begin) * ((time / duration) ** 2) + begin;
    case 'linear':
    default:
      return time * (end - begin) / duration + begin;
  }
};

export {
  rand,
  tween,
};
