import React, { ReactNode } from "react";
import { memo } from "react";

import { SingerHeaderWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  title?: string;
  url?: string;
  more?: boolean;
}

const SingerHeader: React.FC<IProps> = (props) => {
  const {title, url, more} = props;
  
  return (
    <SingerHeaderWrapper>
      <div className="content">
        <h3 className="title">{title}</h3>
        {more && <a href={url} className="more">
          更多
        </a>}
      </div>
    </SingerHeaderWrapper>
  );
};
export default memo(SingerHeader);
SingerHeader.displayName = "SingerHeader";
