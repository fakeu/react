export const currentDate = () => {
  const l = new Date();
  return l.toLocaleString();
};

export const idGenerator = () => {
  const min = 1000000000000;
  const max = 9999999999999;
  return Math.floor(Math.random() * (max - min)) + min;
};
