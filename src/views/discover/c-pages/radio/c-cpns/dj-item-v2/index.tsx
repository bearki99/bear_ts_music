import React, { ReactNode } from "react";
import { memo } from "react";
import classNames from "classnames";
import { DJItemV2Wrapper } from "./style";
import { transformUrl } from "@/utils/transformUrl";
interface IProps {
  children?: ReactNode;
  index: number;
  infoData: any;
}

const DJItemV2: React.FC<IProps> = (props) => {
  const { index, infoData } = props;
  const imgUrl = infoData && infoData.program && infoData.program.coverUrl;
  const wantUrl = transformUrl(imgUrl, 40);
  const header = infoData && infoData.program && infoData.program.name;
  const id = infoData && infoData.program && infoData.program.id;
  const name = infoData && infoData.program && infoData.program.radio?.name;
  const radioID = infoData && infoData.program && infoData.program.radio?.id;
  const rank = infoData && infoData.rank;
  const currentRank = rank <= 9 ? "0" + rank : rank + "";
  const lastRank = infoData && infoData.lastRank;
  const subRank = Math.abs(lastRank - rank);
  let flag = "";
  if (lastRank == -1) flag = "new";
  else if (rank > lastRank) flag = "drop";
  else if (rank < lastRank) flag = "increase";
  else flag = "normal";
  return (
    <DJItemV2Wrapper
      className={classNames({
        white: index % 2 === 0,
        black: index % 2 !== 0,
      })}
    >
      {/* 排名 */}
      <div className="rank">
        <div
          className={classNames("rank-detail", {
            "rank-active": rank <= 3,
          })}
        >
          {currentRank}
        </div>
        <div className="rank-flag">
          {flag == "new" && <div className="sprite-btn2 rankbtn"></div>}
          {flag == "normal" && (
            <div className="rankitem normal">
              <div className="sprite-btn2 rankbtn-v rankbtn-v1"></div>
              <div>{subRank}</div>
            </div>
          )}
          {flag == "increase" && (
            <div className="rankitem increase">
              <div className="sprite-btn2 rankbtn-v rankbtn-v2"></div>
              <div>{subRank}</div>
            </div>
          )}
          {flag == "drop" && (
            <div className="rankitem drop">
              <div className="sprite-btn2 rankbtn-v rankbtn-v3"></div>
              <div>{subRank}</div>
            </div>
          )}
        </div>
      </div>
      {/* 左侧头像 */}
      <div className="left">
        <img src={wantUrl} alt="" />
        <div className="cover sprite-icon"></div>
      </div>
      {/* 右侧详细信息 */}
      <div className="right">
        <div className="header">
          <a href={"/program?id=" + id} className="overflow-one">
            {header}
          </a>
        </div>

        <a href={"/djradio?id=" + radioID} className="name">
          {name}
        </a>
      </div>
    </DJItemV2Wrapper>
  );
};
export default memo(DJItemV2);
