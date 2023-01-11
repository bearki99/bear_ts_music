//节流函数
export const bearThrottle = function (fn, time) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(this, ...args); //独立函数调用this会指向window，要把this调整过来
        timer = null;
      }, time);
    }
  };
};
