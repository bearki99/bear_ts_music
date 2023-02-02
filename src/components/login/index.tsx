import React, { ReactNode, useEffect, useRef, useState } from "react";
import { memo } from "react";

import { MyLoginWrapper } from "./style";

import { useBearDispatch, useBearSelector } from "@/store";
import mybearRequest from "@/service";
import { changeisLogin } from "./store";
import Wait from "./c-cpns/wait";

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
  const dispatch = useBearDispatch();
  //0-还没扫码 1-扫码了但是还没按登录 2-登录 3-过期
  const [status, setStatus] = useState(0);
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
      console.log(statusRes.code);
      if (statusRes.code === 800) {
        clearInterval(timer);
        setStatus(3);
        dispatch(changeisLogin(false));
      }
      if (statusRes.code === 802) {
        // console.log("待确认");
        setStatus(1);
        dispatch(changeisLogin(false));
      }
      if (statusRes.code === 803) {
        clearInterval(timer);
        setStatus(2);
        // console.log("授权登录成功");
        dispatch(changeisLogin(true));
        localStorage.setItem("cookie", statusRes.cookie);
        setTimeout(() => {
          window.location.href = "/#/discover/recommend";
          setStatus(0);
        }, 2000);
      }

    }, 2000);
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
              {(status == 0 || status == 3) && (
                <>
                  <div className="left">
                    <img
                      src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <div className="name">扫码登录{status}</div>
                    <div className="imgs">
                      <img src={imgUrl} alt="" ref={imgRef} />
                      {status == 3 && (
                        <div className="notValid">
                          <button onClick={login}>刷新</button>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
              {status == 1 && <Wait />}
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
