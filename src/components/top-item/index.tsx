import { bearThrottle } from "@/utils/throttle";
import React, { ReactNode, useEffect, useState } from "react";
import { memo } from "react";
import { TopItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const TopItem: React.FC<IProps> = () => {
  const [show, setShow] = useState(false);
  function toTop() {
    window.scrollTo(0, 0);
  }
  function handleScroll() {
    const _scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    if (_scrollTop >= 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  useEffect(() => {
    // 给当前window添加监听
    document.addEventListener("scroll", bearThrottle(handleScroll, 200), true);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [show]);
  return (
    <>
      {show && (
        <TopItemWrapper
          onClick={toTop}
          className="sprite-topbtn"
        ></TopItemWrapper>
      )}
    </>
  );
};
export default memo(TopItem);
