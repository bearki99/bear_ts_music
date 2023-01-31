import React, { ReactNode, useEffect, useRef, useState } from "react";
import { memo } from "react";

import { MyLoginWrapper } from "./style";

import { useBearDispatch, useBearSelector } from "@/store";
import mybearRequest from "@/service";

interface IProps {
  children?: ReactNode;
  show?: boolean;
  handleHidden?: any;
}

const MyLogin: React.FC<IProps> = (props) => {
  const { show, handleHidden } = props;
  const { imgUrl } = useBearSelector((state) => ({
    imgUrl: state.login.imgUrl,
  }));
  const withCredentials = true;
  const [state, setState] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  async function checkStatus(key: number) {
    const timerstamp = +new Date();
    const res: any = await mybearRequest.get({
      url: "/login/qr/check",
      params: {
        key,
        timerstamp,
        withCredentials,
      },
    });
    return res;
  }
  async function getLoginStatus(cookie = "") {
    const timerstamp = +new Date();
    const res = mybearRequest.post({
      url: `/login/status`,
      params: { cookie, timerstamp, withCredentials },
    });
    return res;
  }
  async function login() {
    const timestamp = Date.now();
    const cookie = localStorage.getItem("cookie");
    getLoginStatus(cookie as string);
    const res = await mybearRequest.get({
      url: "/login/qr/key",
      params: {
        timestamp,
        withCredentials,
      },
    });
    const key = res.data.unikey;
    const qrimg = true;
    const res2 = await mybearRequest.get({
      url: "/login/qr/create",
      params: {
        key,
        qrimg,
        timestamp,
        withCredentials,
      },
    });
    if (imgRef.current) {
      imgRef.current.src = res2.data.qrimg;
    }
    const timer = setInterval(async () => {
      const statusRes = await checkStatus(key);
      if (statusRes.code === 800) {
        clearInterval(timer);
      }
      if (statusRes.code === 802) {
        console.log("待确认");
      }
      if (statusRes.code === 803) {
        clearInterval(timer);
        console.log("授权登录成功");
        const myres = await getLoginStatus(statusRes.cookie);
        localStorage.setItem("cookie", statusRes.cookie);
        setTimeout(() => {
          window.location.href = "/#";
        }, 1000);
      }
    }, 3000);
  }
  useEffect(() => {
    login();
  }, []);

  return (
    <MyLoginWrapper show={show}>
      <div className="content">
        <div className="my-show">
          {
            <>
              <div className="left">
                <img
                  src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
                  alt=""
                />
              </div>
              <div className="right">
                <div className="name">扫码登录</div>
                <img src={imgUrl} alt="" ref={imgRef} />
              </div>
            </>
          }
        </div>
        <button className="delete" onClick={handleHidden}>
          x
        </button>
      </div>
    </MyLoginWrapper>
  );
};
export default memo(MyLogin);
MyLogin.displayName = "Login";
