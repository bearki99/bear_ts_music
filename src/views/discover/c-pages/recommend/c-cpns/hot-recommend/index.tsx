import AppItem from "@/components/app-item";
import NavHeader from "@/components/nav-header";
import { useBearSelector } from "@/store";
import React, { ReactNode } from "react";
import { memo } from "react";
import { shallowEqual } from "react-redux";
import { HotRecommendWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}
interface IRecommend {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

const HotRecommend: React.FC<IProps> = () => {
  const { recommend } = useBearSelector(
    (state) => ({
      recommend: state.recommend.recommend,
    }),
    shallowEqual
  );
  return (
    <HotRecommendWrapper>
      <NavHeader
        title="热门推荐"
        items={["华语", "流行", "摇滚", "民谣", "电子"]}
        more="/#/discover/songs"
      />
      <div className="content">
        {recommend &&
          recommend.map((item: IRecommend) => {
            return (
              <AppItem
                key={item.id}
                id={item.id}
                playCount={item.playCount}
                picUrl={item.picUrl}
                name={item.name}
              />
            );
          })}
      </div>
    </HotRecommendWrapper>
  );
};
export default memo(HotRecommend);
