import React, { ReactNode } from "react";
import { memo } from "react";
import { ChatRoomWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  id?: number;
}

const ChatRoom: React.FC<IProps> = (props) => {
  const {id} = props;
  return <ChatRoomWrapper>
    chat-room
  </ChatRoomWrapper>;
};
export default memo(ChatRoom);
ChatRoom.displayName = "ChatRoom";
