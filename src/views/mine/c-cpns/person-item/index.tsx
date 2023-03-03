import React, { ReactNode } from "react";
import { memo } from "react";
import classNames from "classnames";

import { PersonItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  infoData?: any;
}

const PersonItem: React.FC<IProps> = (props) => {
  const {infoData} = props;
  const {text, name, time} = infoData;
  const loginName = localStorage.getItem("username");

  return <PersonItemWrapper className="clearfix">
    <div className={classNames({
      "left-content": loginName !== name,
      "right-content": loginName == name,
    })}>
      <div className="top clearfix">
        <div className="des">{text}</div>
      </div>
      
      <div className="main-detail">
        <div className="name">{name}</div>
        <div className="time">{time}</div>
      </div>
    </div>
    
  </PersonItemWrapper>;
};
export default memo(PersonItem);
PersonItem.displayName = "PersonItem";
