import NavHeaderV2 from "@/components/nav-header-v2";
import { useBearSelector } from "@/store";
import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { shallowEqual } from "react-redux";
import { HotDJWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const HotDJ: React.FC<IProps> = () => {
  const { hotdjData } = useBearSelector(
    (state) => ({
      hotdjData: state.recommend.hotdjData,
    }),
    shallowEqual
  );
  return (
    <HotDJWrapper>
      <NavHeaderV2 title="热门主播" />
      {hotdjData && hotdjData.map((item: any) => {
        return <div className="item" key={item.id}>
            <img src={transformUrl(item.avatarUrl, 40)} alt="" />
            <div className="right">
                <div className="name">{item.nickName}</div>
            </div>
        </div>
      })}
    </HotDJWrapper>
  );
};
export default memo(HotDJ);
