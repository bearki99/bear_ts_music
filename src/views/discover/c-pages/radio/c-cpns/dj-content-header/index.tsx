import React, { ReactNode } from "react";
import { memo } from "react";
import { DJContentHeaderWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  title: string;
  url: string;
  width: number;
}

const DJCHeader: React.FC<IProps> = (props) => {
    const {title, url, width} = props;
  return <DJContentHeaderWrapper width={width}>
    <a href={url} className="title">{title}</a>
    <a href={url} className="more">更多</a>
  </DJContentHeaderWrapper>;
};
export default memo(DJCHeader);
