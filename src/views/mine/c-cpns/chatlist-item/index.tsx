import React, { ReactNode } from "react";
import { memo } from "react";
import { ChatItemWrapper } from "./style";
import Pic from "@/assets/img/head_portrait.jpg";
import classNames from "classnames";
interface IProps {
  children?: ReactNode;
  infoData?: any;
  activeUser: string[];
}

const ChatItem: React.FC<IProps> = (props) => {
  const {activeUser, infoData} = props;
  const {name, des} = infoData;
  return (
    <ChatItemWrapper>
      <div
        className={classNames("info", {
          activeCard: true,
        })}
      >
        <div className="left">
          <div className="icon">
            <img src={Pic} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="name">{name}</div>
          <div className="des">{des}</div>
        </div>
      </div>
    </ChatItemWrapper>
  );
};
export default memo(ChatItem);
ChatItem.displayName = "ChatItem";
