import React, { ReactNode } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { NavHeaderWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  title?: string;
  items?: string[];
  more?: string;
}

const NavHeader: React.FC<IProps> = (props) => {
  const {
    title = "热门",
    items = [],
    more = "/",
  } = props;
  const navigate = useNavigate();
  const newHref = '/#' + more;
  return (
    <NavHeaderWrapper className="sprite-nav">
      <div className="left">
        <h3 onClick={() => navigate(more)}>{title}</h3>
        <div className="item">
          {items &&
            items.map((ele, index) => {
              return (
                <a key={index} className="nav-item" href="">
                  {ele}
                </a>
              );
            })}
        </div>
      </div>
      <div className="right">
        <a href={newHref} className="more">
          更多
        </a>
        <i className="icon sprite-nav"></i>
      </div>
    </NavHeaderWrapper>
  );
};
export default memo(NavHeader);
