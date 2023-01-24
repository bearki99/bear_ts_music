import React, { ReactNode } from "react";
import { memo } from "react";
import { DJContentHeaderWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  title: string;
  url: string;
  width: number;
  subtitle?: string;
}

const DJCHeader: React.FC<IProps> = (props) => {
  const { title, url, width, subtitle } = props;
  return (
    <DJContentHeaderWrapper width={width}>
      <a href={url} className="title">
        {title}
      </a>
      {subtitle && <a className="sub-title">{subtitle}</a>}
      <a href={url} className="more">
        更多
      </a>
    </DJContentHeaderWrapper>
  );
};
export default memo(DJCHeader);
