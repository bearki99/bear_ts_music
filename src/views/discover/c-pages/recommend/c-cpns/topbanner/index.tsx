import { useBearSelector } from "@/store";
import React, { ReactNode, useRef, ElementRef, useState } from "react";
import { memo } from "react";
import { Carousel } from "antd";
import { shallowEqual } from "react-redux";
import { BannerContent, BannerLeft, BannerRight, BannerWrapper } from "./style";
import classNames from "classnames";
interface IProps {
  children?: ReactNode;
}
interface Ibanner {
  imageUrl: string;
  url: string;
  bannerBizType: string;
}
const TopBanner: React.FC<IProps> = () => {
  const { banners } = useBearSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    shallowEqual
  );
  const ref = useRef<ElementRef<typeof Carousel>>(null);
  const [num, setNum] = useState(0);
  function jumpUrl(url: string) {
    const w = window.open("about:blank");
    if (w) {
      w.location.href = url;
    }
  }
  function transformUrl(url: string) {
    const newUrl = url + "?imageView&blur=40x20";
    return newUrl;
  }
  function prevClick() {
    ref.current?.prev();
  }
  function nextClick() {
    ref.current?.next();
  }
  function handlebeforeChange(from:number, to:number) {
    setNum(to);
  }
  // 获取图片
  const bgImgUrl = banners && banners[num]?.imageUrl;
  const nowImgUrl = bgImgUrl && transformUrl(bgImgUrl);

  return (
    <BannerWrapper style={{ background: `url(${nowImgUrl})` }}>
      <BannerLeft>
        <div className="l-arr sprite-arrow" onClick={() => prevClick()}></div>
      </BannerLeft>
      <BannerContent className="wrap-v2">
        <div className="content-left">
          <Carousel
            autoplay
            ref={ref}
            effect="fade"
            beforeChange={handlebeforeChange}
            dots={false}
          >
            {banners &&
              banners.map((item: Ibanner) => {
                return (
                  <img
                    src={item.imageUrl}
                    key={item.imageUrl}
                    onClick={() => jumpUrl(item.url)}
                  />
                );
              })}
          </Carousel>
          <div className="symbol">
            {banners &&
              banners.map((element: Ibanner, index: number) => {
                return (
                  <div
                    className={classNames({
                      "symbol-item": true,
                      active: num === index,
                    })}
                    key={index}
                  ></div>
                );
              })}
          </div>
        </div>
        <div className="content-right sprite-download">
          <a href="/#/download" className="download-btn sprite-download"></a>
          <span>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
        </div>
      </BannerContent>
      <BannerRight>
        <div className="r-arr sprite-arrow" onClick={() => nextClick()}></div>
      </BannerRight>
    </BannerWrapper>
  );
};
export default memo(TopBanner);
