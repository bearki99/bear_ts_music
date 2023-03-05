import { getloginStatus } from "@/utils/getLoginStatus";
import React, { ReactNode, useState, useRef } from "react";
import { memo, useEffect } from "react";
import ChatlistItem from "./c-cpns/chatlist-item";
import Chatroom from "./c-cpns/chatroom";
import { MineWrapper } from "./style";
import socketIO from "socket.io-client";
import myData from "@/assets/data/chat-data.json";

interface IProps {
  children?: ReactNode;
}

interface IData {
  name: string;
  des: string;
}

const Mine: React.FC<IProps> = () => {
  const [users, setUsers] = useState([]);
  const [id, changeID] = useState(0);
  const [selectUser, setselectUser] = useState(0);
  const socket = (socketIO as any).connect("http://localhost:4000");
  useEffect(() => {
    getloginStatus();
    const userName = localStorage.getItem("username");
    if (
      !users.length ||
      (newUsers?.indexOf(userName || "") === -1 && socket.id)
    ) {
      socket.emit("newUser", { userName, socketID: socket.id });
    }
  }, []);
  useEffect(() => {
    socket.on("newUserResponse", (data: any) => {
      setUsers(data);
    });
  }, []);
  const newUsers: string[] = users.map((item: any) => item.userName);
  const activeUser: string[] = [];
  newUsers.forEach((item: string, index: number) => {
    if (newUsers.indexOf(item) === index) activeUser.push(item);
  });
  const newData = myData.filter(
    (item: IData) => item.name !== localStorage.getItem("username")
  );
  return (
    <MineWrapper>
      <div className="chatHome">
        <div className="chatLeft">
          <div className="title">
            <h1>私信</h1>
          </div>
          <div className="chatList">
            <div className="list-name">私信列表</div>
            {newData &&
              newData.map((item: IData) => {
                return (
                  <ChatlistItem
                    key={item.name}
                    activeUser={activeUser}
                    infoData={item}
                  />
                );
              })}
            {/* <ChatlistItem></ChatlistItem>
            <ChatlistItem></ChatlistItem>
            <ChatlistItem></ChatlistItem> */}
          </div>
        </div>
        <div className="chatRight">
          <Chatroom id={id} socket={socket} />
        </div>
      </div>
    </MineWrapper>
  );
};
export default memo(Mine);
