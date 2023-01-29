export const isTouchBottom = (fn: any) => {
  const showHeight = window.innerHeight;
  const scrollTopHeight =
    document.body.scrollTop || document.documentElement.scrollTop;
  const allHeight = document.body.scrollHeight;
  if (allHeight <= showHeight + scrollTopHeight) {
    fn();
  }
};
