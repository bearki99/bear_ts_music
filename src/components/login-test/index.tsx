import React, { ReactNode, useRef, ElementRef, useState } from "react";
import { memo } from "react";
import { LoginInputWrapper } from "./style";

import { Button, Input } from "antd";
import { message } from 'antd';

import { newbearRequest } from "@/service";
import { Vertify } from '@alex_xu/react-slider-vertify';
import { useBearDispatch } from "@/store";
import { changeisLogin } from "../login/store";

interface IProps {
  children?: ReactNode;
}

export function getLoginStatus(username: string, password: string) {
  const data = { username, password };
  return newbearRequest.post({
    url: "/mylogin",
    data
  })
}

const InputLogin: React.FC<IProps> = () => {
  const inputRef = useRef<ElementRef<typeof Input>>(null);
  const passwordRef = useRef<ElementRef<typeof Input>>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dispatch = useBearDispatch();
  async function handleSuccess() {
    const name = inputRef.current?.input?.value as string;
    const password = passwordRef.current?.input?.value as string;
    const res = await getLoginStatus(name as string, password as string);
    if (res?.token) localStorage.setItem("token", res.token);
    message.success("成功", 3, ()=>{
      if(scrollRef.current){
      scrollRef.current.style.display = "none";
      }
      setTimeout(() => {
        window.location.href = "/#";
      }, 2000);
    });

  }
  function handleClick() {
    if(scrollRef.current){
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
          onSuccess={handleSuccess}    //成功触发事件
          onFail={()=>{message.error("失败", 3);}} // 失败触发事件
          />
        </div>
    </LoginInputWrapper>
  );
};
export default memo(InputLogin);
InputLogin.displayName = "InputLogin";
