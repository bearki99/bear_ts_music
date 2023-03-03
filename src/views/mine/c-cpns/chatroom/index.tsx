import React, { ReactNode, useRef, useState, useEffect } from "react";
import { memo } from "react";
import { ChatRoomWrapper } from "./style";
import { Input, Button } from "antd";
import { message } from "antd";

import { ElementRef } from "react";
import PersonItem from '../person-item/index'

interface IProps {
  children?: ReactNode;
  id?: number;
  socket?: any;
}

const ChatRoom: React.FC<IProps> = (props) => {
  const { id, socket } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [inputVal, setInputVal] = useState("");
  const ref = useRef<ElementRef<typeof Input>>(null);
  const [messages, setMessages] = useState<any>([]);
  useEffect(()=>{
    const userName = localStorage.getItem('username');
    socket.emit('newUser', {userName, socketID: socket.id});
  }, []);
  useEffect(() => {
    socket.on("messageResponse", (data: any) =>
      setMessages([...messages, data])
    );
  }, [socket, messages]);
  function handleSubmit() {
    let val = inputVal;
    val = val?.replaceAll(" ", "");
    if (val == "") warning();
    else {
      socket.emit("message", {
        text: val,
        name: localStorage.getItem("username"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        time: new Date()
      });
      setInputVal("");
    }
  }
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "输入不能为空",
    });
  };
  return (
    <ChatRoomWrapper>
      <div className="main-content">
        {messages && messages.map((item: any)=>{
          return <PersonItem key={item.id} infoData={item}/>
        })}
      </div>
      <div className="footer">
        <Input.Group compact size="large">
          <Input
            style={{ width: "calc(100% - 200px)" }}
            placeholder="请输入聊天内容"
            onPressEnter={handleSubmit}
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
            ref={ref}
          />
          <Button type="primary" size="large" onClick={handleSubmit}>
            发送
          </Button>
        </Input.Group>
      </div>
    </ChatRoomWrapper>
  );
};
export default memo(ChatRoom);
ChatRoom.displayName = "ChatRoom";
