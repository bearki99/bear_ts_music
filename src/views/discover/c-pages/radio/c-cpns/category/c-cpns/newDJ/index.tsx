import { useBearSelector } from "@/store";
import React, { ReactNode } from "react";
import { memo } from "react";
import NewDJItem from "../newDJ-item";
import { NewDJWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const NewDJ: React.FC<IProps> = () => {
  const { currentRecommendData } = useBearSelector((state: any) => ({
    currentRecommendData: state.radio.currentRecommendData,
  }));
  return (
    <NewDJWrapper>
      <div className="title">
        <h3>优秀新电台</h3>
      </div>
      <div className="content">
        {currentRecommendData &&
          currentRecommendData.map((item: any) => {
            return <NewDJItem key={item.id} infoData={item} />;
          })}
      </div>
    </NewDJWrapper>
  );
};
export default memo(NewDJ);
NewDJ.displayName = "NewDJ";
