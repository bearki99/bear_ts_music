import { getloginStatus } from '@/utils/getLoginStatus';
import React, { ReactNode, useState, useRef } from 'react';
import { memo, useEffect } from 'react';
import ChatlistItem from './c-cpns/chatlist-item';
import Chatroom from './c-cpns/chatroom';
import { MineWrapper } from './style';
import socketIO from "socket.io-client"

interface IProps {
  children?: ReactNode;
}

const Mine: React.FC<IProps> = () => {
  const [users, setUsers] = useState([]);
  const [id, changeID] = useState(0);
  const socket = (socketIO as any).connect("http://localhost:4000");
  useEffect(() => {
    getloginStatus();
  }, []);
  useEffect(()=>{
    socket.on('newUserResponse', (data: any) => setUsers(data));
  }, []);
  return (
    <MineWrapper>
      <div className="chatHome">
        <div className="chatLeft">
          <div className="title">
            <h1>私信</h1>
          </div>
          <div className="chatList">
            <div className="list-name">私信列表</div>
            <ChatlistItem></ChatlistItem>
            <ChatlistItem></ChatlistItem>
            <ChatlistItem></ChatlistItem>
          </div>
        </div>
        <div className="chatRight">
          <Chatroom id={id} socket={socket}/>
        </div>
      </div>
    </MineWrapper>
  );
};
export default memo(Mine);
