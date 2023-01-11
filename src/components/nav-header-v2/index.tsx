import React, { ReactNode } from "react";
import { memo } from "react";
import { NavHeaderV2Wrapper } from "./style";
interface IProps {
  children?: ReactNode;
  title?: string;
  to?: string;
  isTo?: boolean;
}

const NavHeaderV2: React.FC<IProps> = (props) => {
  const { title = "入驻歌手", to = "", isTo = false } = props;
  return (
    <NavHeaderV2Wrapper>
      <div className="title">{title}</div>
      {isTo && <a href={to} className='all'>查看全部 &gt;</a>}
    </NavHeaderV2Wrapper>
  );
};
export default memo(NavHeaderV2);
