import { getloginStatus } from "@/utils/getLoginStatus";
import React, { ReactNode, useState, useRef, useContext } from "react";
import { memo, useEffect } from "react";
import ChatlistItem from "./c-cpns/chatlist-item";
import Chatroom from "./c-cpns/chatroom";
import { MineWrapper } from "./style";
// import socketIO from "socket.io-client";
import myData from "@/assets/data/chat-data.json";
import { SocketContext } from "@/App";
import { useBearSelector } from "@/store";

interface IProps {
  children?: ReactNode;
  socket?: any;
}

interface IData {
  name: string;
  des: string;
}

const Mine: React.FC<IProps> = (props) => {
  const socket: any = useContext(SocketContext);
  let { activeUser } = useBearSelector((state) => ({
    activeUser: state.counter.activeUser,
  }));
  const [users, setUsers] = useState([]);
  const [id, changeID] = useState(0);
  const [selectUser, setselectUser] = useState("");
  useEffect(() => {
    getloginStatus();
    if (socket) {
      const username = localStorage.getItem("username");
      socket.emit("newUser", { username, socketID: socket.id });
    }
  }, []);
  useEffect(() => {
    if (socket) {
      (socket as any).on("newUserResponse", (data: any) => {
        setUsers(data);
      });
    }
  }, [socket, users]);

  const newData = myData.filter(
    (item: IData) => item.name !== localStorage.getItem("username")
  );
  activeUser = activeUser.filter(
    (item) => item.name !== localStorage.getItem("username")
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
                    nowUser={selectUser}
                    infoData={item}
                    handleMyClick={setselectUser}
                  />
                );
              })}
          </div>
        </div>
        <div className="chatRight">
          <Chatroom id={id} socket={socket} selectUser={selectUser} />
        </div>
      </div>
    </MineWrapper>
  );
};
export default memo(Mine);
