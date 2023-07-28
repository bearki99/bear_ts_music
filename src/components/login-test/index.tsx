import React, {
  ReactNode,
  useRef,
  ElementRef,
  useState,
  useContext,
} from "react";
import { memo } from "react";
import { LoginInputWrapper } from "./style";

import { Button, Input } from "antd";
import { message } from "antd";

import { newbearRequest } from "@/service";
import { Vertify } from "@alex_xu/react-slider-vertify";
import { useBearDispatch } from "@/store";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "@/service/request/auth.service";
import { SocketContext } from "@/App";

interface IProps {
  children?: ReactNode;
}

export function getLoginStatus(username: string, password: string) {
  const data = { username, password };
  return newbearRequest.post({
    url: "/mylogin",
    data,
  });
}

const InputLogin: React.FC<IProps> = () => {
  const socket: any = useContext(SocketContext);
  const inputRef = useRef<ElementRef<typeof Input>>(null);
  const passwordRef = useRef<ElementRef<typeof Input>>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  async function handleSuccess() {
    const username = inputRef.current?.input?.value as string;
    const password = passwordRef.current?.input?.value as string;
    const data = { username, password };

    newbearRequest
      .post({
        url: "/mylogin",
        data,
      })
      .then((data) => {
        console.log(data.data.data.access_token, data.data.data.refresh_token, data.data.data)
        if (data.data.data.access_token && data.data.data.refresh_token) {
          setAccessToken(data.data.data.access_token);
          setRefreshToken(data.data.data.refresh_token);
        }

        localStorage.setItem("username", username);
        // socket.emit('newUser', { username, socketID: socket.id });
      })
      .catch((err) => console.log(err));
    message.success("成功", 3, () => {
      if (scrollRef.current) {
        scrollRef.current.style.display = "none";
      }
    });
    setTimeout(() => {
      window.location.href = "/#";
    }, 2000);
  }
  function handleClick() {
    if (scrollRef.current) {
      scrollRef.current.style.display = "block";
    }
  }
  return (
    <LoginInputWrapper>
      <div className="main-content">
        <div className="name">
          <Input placeholder="请输入姓名" size="small" ref={inputRef} />
        </div>
        <div className="password">
          <Input.Password
            placeholder="请输入密码"
            size="small"
            ref={passwordRef}
          />
        </div>
        <Button type="primary" onClick={handleClick}>
          提交
        </Button>
      </div>

      <div className="my-verify" ref={scrollRef}>
        <Vertify
          width={200}
          height={160}
          visible={true}
          onSuccess={handleSuccess} //成功触发事件
          onFail={() => {
            message.error("失败", 3);
          }} // 失败触发事件
        />
      </div>
    </LoginInputWrapper>
  );
};
export default memo(InputLogin);
InputLogin.displayName = "InputLogin";
