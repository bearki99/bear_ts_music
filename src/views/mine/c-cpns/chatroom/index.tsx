import React, { ReactNode, useRef, useState, useEffect } from "react";
import { memo } from "react";
import { ChatRoomWrapper } from "./style";
import { Input, Button } from "antd";
import { message } from "antd";
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';

import { ElementRef } from "react";
import PersonItem from "../person-item/index";

interface IProps {
  children?: ReactNode;
  id?: number;
  socket?: any;
  selectUser?: string;
}

const ChatRoom: React.FC<IProps> = (props) => {
  const { id, socket, selectUser } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [inputVal, setInputVal] = useState("");
  const ref = useRef<ElementRef<typeof Input>>(null);
  const [messages, setMessages] = useState<any>([]);
  const [typingStatus, setTypingStatus] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const smoothScrollToBottom = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      const chatContentHeight = chatContainer.scrollHeight;
      const scrollDuration = 500;
      let startTime = 0;
      const startScrollTop = chatContainer.scrollTop;
      const endScrollTop = chatContentHeight - chatContainer.clientHeight;

      const easeInOutCubic = (t: number) =>
        t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      const animateScroll = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }
        const elapsedTime = timestamp - startTime;
        const progress = easeInOutCubic(elapsedTime / scrollDuration);
        const newScrollTop = startScrollTop + progress * (endScrollTop - startScrollTop);
        chatContainer.scrollTo({ top: newScrollTop, behavior: "auto" });
        if (elapsedTime < scrollDuration) {
          requestAnimationFrame(animateScroll);
        } else {
          chatContainer.scrollTo({ top: chatContentHeight, behavior: "auto" });
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };
  const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];
  // useEffect(() => {
  //   socket.on("messageResponse", (data: any) =>
  //     setMessages([...messages, data])
  //   );
  //   smoothScrollToBottom();
  // }, [socket, messages]);
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
        time: new Date().toLocaleString(),
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
      { selectUser=='' && <div>欢迎来到聊天室</div>}
      { selectUser !== "" && <>
      <div className="header">
        <div className="left">
          <div className="icon">
            <img src={require(`@/assets/img/head_portrait_${selectUser}.jpg`)} alt="" />
            <span>{selectUser}</span>
          </div>
        </div>
      </div>
      <div className="main-content" ref={chatContainerRef}>
        {messages &&
          messages.map((item: any) => {
            return <PersonItem key={item.time} infoData={item} />;
          })}
      </div>
      <div className="footer">
        <Input.Group  size="large" className="input-group">
          <Dropdown menu={{ items }} placement="top" arrow={{ pointAtCenter: true }}>
            <Button>top</Button>
          </Dropdown>
          <Input
            style={{ width: "calc(100% - 200px)" }}
            placeholder="请输入聊天内容"
            onPressEnter={handleSubmit}
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
            ref={ref}
            className="my-input"
          />
          <Button type="primary" size="large" onClick={handleSubmit} className="mybtn">
            发送
          </Button>
        </Input.Group>
      </div>
      </>}
      
    </ChatRoomWrapper>
  );
};
export default memo(ChatRoom);
ChatRoom.displayName = "ChatRoom";
