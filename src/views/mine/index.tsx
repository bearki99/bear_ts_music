import { getloginStatus } from "@/utils/getLoginStatus";
import React, { ReactNode, useState, useRef, useContext } from "react";
import { memo, useEffect } from "react";
import ChatlistItem from "./c-cpns/chatlist-item";
import Chatroom from "./c-cpns/chatroom";
import { MineWrapper } from "./style";
// import socketIO from "socket.io-client";
import myData from "@/assets/data/chat-data.json";
import { SocketContext} from "@/App";

interface IProps {
  children?: ReactNode;
  socket?: any;
}

interface IData {
  name: string;
  des: string;
}

const Mine: React.FC<IProps> = (props) => {
  const socket = useContext(SocketContext);

  const [users, setUsers] = useState([]);
  const [id, changeID] = useState(0);
  const [selectUser, setselectUser] = useState('');

  useEffect(() => {
    getloginStatus();
  }, []);
  useEffect(() => {
    if(socket){
      (socket as any).on("newUserResponse", (data: any) => {
        setUsers(data);
      });
    }
  }, [socket, users]);
  const newUsers: string[] = users.map((item: any) => item.userName);
  const activeUser: string[] = [];
  newUsers.forEach((item: string, index: number) => {
    if (newUsers.indexOf(item) === index) activeUser.push(item);
  });
  const newData = myData.filter(
    (item: IData) => item.name !== localStorage.getItem("username")
  );
  console.log(users);
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
            {/* <ChatlistItem></ChatlistItem>
            <ChatlistItem></ChatlistItem>
            <ChatlistItem></ChatlistItem> */}
          </div>
        </div>
        <div className="chatRight">
          <Chatroom id={id} socket={socket} selectUser={selectUser}/>
        </div>
      </div>
    </MineWrapper>
  );
};
export default memo(Mine);
