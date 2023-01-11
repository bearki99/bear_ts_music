import { useBearDispatch, useBearSelector } from "@/store";
import React, { ReactNode, useState } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { changenowCat } from "../store";
import { MidWrapper, SongHeaderWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  title?: string;
}
const SongHeader: React.FC<IProps> = (props) => {
  const [isAdd, setAdd] = useState(false);
  const dispatch = useBearDispatch();
  const navigate = useNavigate();
  const { allStyle, styleDatas, nowCat } = useBearSelector((state) => ({
    allStyle: state.song.allStyle,
    styleDatas: state.song.styleDatas,
    nowCat: state.song.nowCat
  }));
  //跳转到热门
  function gotoHot() {
    navigate("/discover/songs?order=hot");
  }
  function handleClick() {
    setAdd(!isAdd);
  }
  function handleClickName(item: any){
    dispatch(changenowCat(item.name));
    navigate('/discover/songs?cat=' + item.name);
  }
  return (
    <SongHeaderWrapper>
      <h1>{nowCat}</h1>
      <button className="sprite-bg-v2 select" onClick={handleClick}>
        <i className="sprite-bg-v2">选择分类</i>
      </button>
      {isAdd && (
        <div className="select-btns">
          <div className="triangle sprite-icon"></div>
          <div className="top sprite-new-bg"></div>
          <div className="mid sprite-new-bg">
            <MidWrapper>
              <div className="mid-top">
                <button className="sprite-song-btn all-btn" onClick={()=>handleClickName({name:'全部'})}>
                  <a>全部风格</a>
                </button>
              </div>
              <div className="mid-bottom">
                {
                  allStyle && allStyle.map((item: any, index: number) => {
                    return <div key={item} className='item'>
                      <div className="item-left">
                        <div className={"sprite-btn2 icon icon-" + index}></div>
                        <div className="name">{item}</div>
                      </div>
                      <div className="item-right">
                        {
                          styleDatas && styleDatas[index].map((element:any)=>{
                            return <div key={element.name} className='right-data' onClick={()=>handleClickName(element)}>
                              <div>{element.name}</div>
                            </div>
                          })
                        }
                      </div>
                    </div>
                  })
                }
              </div>
            </MidWrapper>
          </div>
          <div className="footer sprite-new-bg"></div>
        </div>
      )}
      <button className="sprite-song-btn hot" onClick={gotoHot}>
        <i>热门</i>
      </button>
    </SongHeaderWrapper>
  );
};
export default memo(SongHeader);
