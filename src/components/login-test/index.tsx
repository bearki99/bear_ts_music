import React, { ReactNode, useRef, ElementRef } from "react";
import { memo } from "react";
import { LoginInputWrapper } from "./style";

import { Button, Input } from "antd";
// import mybearRequest from "@/service";
import axios from "axios";
interface IProps {
  children?: ReactNode;
}
const request = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 60000,
}).request;

export function getLoginStatus(username: string, password: string) {
  const data = { username, password };
  return request({
    url: "mylogin",
    method: "POST",
    data,
  });
}

const InputLogin: React.FC<IProps> = () => {
  const inputRef = useRef<ElementRef<typeof Input>>(null);
  const passwordRef = useRef<ElementRef<typeof Input>>(null);
  async function handleClick() {
    const name = inputRef.current?.input?.value;
    const password = passwordRef.current?.input?.value;
    const res = await getLoginStatus(name as string, password as string);
    if (res?.data?.token) localStorage.setItem("token", res?.data?.token);
  }
  return (
    <LoginInputWrapper>
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
    </LoginInputWrapper>
  );
};
export default memo(InputLogin);
InputLogin.displayName = "InputLogin";
