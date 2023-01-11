import React, { ReactNode, useState } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { SongHeaderWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  title?: string;
}
const SongHeader: React.FC<IProps> = (props) => {
  const { title = "全部" } = props;
  const [isAdd, setAdd] = useState(false);
  const navigate = useNavigate();
  //跳转到热门
  function gotoHot() {
    navigate("/discover/songs?order=hot");
  }
  function handleClick() {
    setAdd(!isAdd);
  }
  return (
    <SongHeaderWrapper>
      <h1>{title}</h1>
      <button className="sprite-bg-v2 select" onClick={handleClick}>
        <i className="sprite-bg-v2">选择分类</i>
      </button>
      {isAdd && (
        <div className="select-btns">
          <div className="top sprite-new-bg"></div>
        </div>
      )}
      <button className="sprite-song-btn hot" onClick={gotoHot}>
        <i>热门</i>
      </button>
    </SongHeaderWrapper>
  );
};
export default memo(SongHeader);
