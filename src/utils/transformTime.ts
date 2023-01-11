export const transformTime = (originTime: number) => {
  // 这里获取的Time单位是毫秒，首先转换为秒
  const newTime = originTime / 1000;
  // 获取分钟数
  const minute =
    Math.floor(newTime / 60) < 10
      ? "0" + Math.floor(newTime / 60)
      : Math.floor(newTime / 60) + "";
  const second =
    Math.floor(newTime % 60) < 10
      ? "0" + Math.floor(newTime % 60)
      : Math.floor(newTime % 60) + "";
  const res = minute + ":" + second;
  return res;
};
