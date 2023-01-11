import NavHeaderV2 from "@/components/nav-header-v2";
import { useBearSelector } from "@/store";
import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { shallowEqual } from "react-redux";
import { ArriveSingersWrapper } from "./style";
// 入驻歌手模块
interface IProps {
  children?: ReactNode;
}

const ArriveSingers: React.FC<IProps> = () => {
  const { arriveSingers } = useBearSelector(
    (state) => ({
      arriveSingers: state.recommend.arriveSingers,
    }),
    shallowEqual
  );
  return (
    <ArriveSingersWrapper>
      <NavHeaderV2 title="入驻歌手" to="/#/discover/singers" isTo={true} />
      {arriveSingers &&
        arriveSingers.map((item: any) => {
          return (
            <div className="singer-item" key={item.id}>
              <a href="#">
                <img src={transformUrl(item.img1v1Url, 62, 62)} alt="" />
                <div className="discribe">
                  <h4>{item.name}</h4>
                </div>
              </a>
            </div>
          );
        })}
      <a className="btn sprite-bg-v2" href="/#/apply">
        <i className="sprite-bg-v2">申请成为网易音乐人</i>
      </a>
    </ArriveSingersWrapper>
  );
};
export default memo(ArriveSingers);
