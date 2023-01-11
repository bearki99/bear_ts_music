import { useBearDispatch, useBearSelector } from "@/store";
import { transformUrl } from "@/utils/transformUrl";
import classNames from "classnames";
import React, { ReactNode, useEffect } from "react";
import { memo } from "react";
import { shallowEqual } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { changeCurrentIndexAction, getCurrentRankingData } from "../../store";
import { NewRankingItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  infoData: any;
}

const RankingItem: React.FC<IProps> = (props) => {
  const { infoData } = props;
  const { currentIndex } = useBearSelector(
    (state: any) => ({
      currentIndex: state.ranking.currentIndex,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useBearDispatch();
  const handleClick = (num: number, id: number) => {
    dispatch(changeCurrentIndexAction(num));
    navigate(`/discover/ranking?id=${id}`)
    window.scrollTo(0, 0);
  };
  return (
    <NewRankingItemWrapper>
      {infoData &&
        infoData.map((item: any, index: number) => {
          let header;
          if (index === 0 || index === 4) {
            header = <h2>{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</h2>;
          }
          return (
            <div key={item.id} className="origin-item">
              {header}
              <div
                className={classNames({
                  item: true,
                  active: currentIndex === index,
                })}
                onClick={() => {
                  handleClick(index, item.id);
                }}
              >
                <div className="left">
                  <img src={transformUrl(item.coverImgUrl, 40)} alt="" />
                </div>
                <div className="right">
                  <div className="name">{item.name}</div>
                  <div className="frequency">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          );
        })}
    </NewRankingItemWrapper>
  );
};
export default memo(RankingItem);
