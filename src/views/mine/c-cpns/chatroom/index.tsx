import React, { ReactNode, useRef, useState, useEffect } from "react";
import { memo } from "react";
import { ChatRoomWrapper } from "./style";
import { Input, Button } from "antd";
import { message } from "antd";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

import { ElementRef } from "react";
import PersonItem from "../person-item/index";
import Emoji from "../emoji";

import Dexie from "dexie";
import { useBearSelector } from "@/store";

interface IMessage {
  id: string;
  text: string;
  name: string;
  socketID: string;
  time: string;
  type: number;
  realTime: number;
  sender: string;
  render: string;
}

class ChatDatabase extends Dexie {
  messages: Dexie.Table<IMessage, string>;

  constructor() {
    super("ChatDatabase");
    this.version(1).stores({
      messages:
        "id, text, name, socketID, time, type, realTime, sender, render",
    });
    this.messages = this.table("messages");
  }
}

const db = new ChatDatabase();

interface IProps {
  children?: ReactNode;
  id?: number;
  socket?: any;
  selectUser?: string;
}

const ChatRoom: React.FC<IProps> = (props) => {
  const { socket, selectUser } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const [inputVal, setInputVal] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const ref = useRef<ElementRef<typeof Input>>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const from = localStorage.getItem("username") as string;
  const { to } = useBearSelector((state) => ({
    to: state.counter.to,
  }));
  const smoothScrollToBottom = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      const chatContentHeight = chatContainer.scrollHeight;
      const scrollDuration = 500;
      let startTime = 0;
      const startScrollTop = chatContainer.scrollTop;
      const endScrollTop = chatContentHeight - chatContainer.clientHeight;

      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      const animateScroll = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }
        const elapsedTime = timestamp - startTime;
        const progress = easeInOutCubic(elapsedTime / scrollDuration);
        const newScrollTop =
          startScrollTop + progress * (endScrollTop - startScrollTop);
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
  useEffect(() => {
    // 加载现有的聊天消息
    db.messages
      // .where("[sender+receiver]")
      // .equals([from, to])
      // .or("[sender+receiver]")
      // .equals([to, from])
      // .orderBy("realTime")
      .toArray()
      .then((msgs) => {
        msgs.sort((a, b) => a.realTime - b.realTime);
        const newData = msgs.filter(
          (item: IMessage) =>
            (item.sender === from && item.render === to) ||
            (item.sender === to && item.render === from)
        );
        setMessages(newData);
        smoothScrollToBottom();
      });
  }, [to]);
  useEffect(() => {
    socket.on("messageResponse", (data: IMessage) => {
      if (
        (data.sender === from && data.render === to) ||
        (data.sender === to && data.render === from)
      ) {
        setMessages([...messages, data]);
      }

      db.messages.add(data);
    });
    smoothScrollToBottom();
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
        time: new Date().toLocaleString(),
        realTime: +new Date(),
        type: 0, //把0设置为文本,
        sender: localStorage.getItem("username"),
        render: to,
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
  const handleEmoji = (item: string) => {
    setShowEmoji(false);
    socket.emit("message", {
      text: item,
      name: localStorage.getItem("username"),
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
      realTime: +new Date(),
      time: new Date().toLocaleString(),
      type: 1, //把1设置为Emoji，2为文件，3为图片,
      sender: localStorage.getItem("username"),
      render: to,
    });
  };
  return (
    <ChatRoomWrapper>
      {selectUser == "" && <div>欢迎来到聊天室</div>}
      {selectUser !== "" && (
        <>
          <div className="header">
            <div className="left">
              <div className="icon">
                <img
                  src={require(`@/assets/img/head_portrait_${selectUser}.jpg`)}
                  alt=""
                />
                <span>{selectUser}</span>
              </div>
            </div>
          </div>
          <div className="main-content" ref={chatContainerRef}>
            {messages &&
              messages.map((item: any) => {
                return (
                  <PersonItem
                    key={item.realTime}
                    infoData={item}
                    type={item.type}
                  />
                );
              })}
          </div>
          <div className="footer">
            <Input.Group size="large" className="input-group">
              {/* emoji表情 */}
              <Dropdown
                placement="topLeft"
                trigger={["click"]}
                open={showEmoji}
                onOpenChange={setShowEmoji}
                dropdownRender={() => <Emoji handleEmoji={handleEmoji} />}
                arrow={{ pointAtCenter: true }}
              >
                <Button className="my-btn1">
                  <img
                    src={require("@/assets/img/emoji/smiling-face.png")}
                    alt=""
                  />
                </Button>
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
              <Button
                type="primary"
                size="large"
                onClick={handleSubmit}
                className="mybtn"
              >
                发送
              </Button>
            </Input.Group>
          </div>
        </>
      )}
    </ChatRoomWrapper>
  );
};
export default memo(ChatRoom);
ChatRoom.displayName = "ChatRoom";
