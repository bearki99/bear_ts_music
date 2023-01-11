import { useBearDispatch, useBearSelector } from "@/store";
import { Carousel } from "antd";
import React, { ReactNode, useEffect, useRef } from "react";
import { memo } from "react";
import { Outlet } from "react-router-dom";
import { getRadioDataAction } from "./store";
import { RadioWrapper } from "./style";
import { ElementRef } from "react";
import { RadioItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const DJRadio: React.FC<IProps> = () => {
  const dispatch = useBearDispatch();
  const ref = useRef<ElementRef<typeof Carousel>>(null);
  const { catelist } = useBearSelector((state) => ({
    catelist: state.radio.catelist,
  }));
  useEffect(() => {
    dispatch(getRadioDataAction());
  }, []);
  function handleChange(isNext: boolean) {
    if (isNext) {
      ref.current?.next();
    } else {
      ref.current?.prev();
    }
  }
  return (
    <RadioWrapper className="all-bg">
      <div className="wrap-v2 content">
        <div className="content-top">
          <div
            className="my-left sprite-dj-btn"
            onClick={() => {
              handleChange(false);
            }}
          ></div>
          <Carousel className="carousel" ref={ref}>
            {[0, 1].map((item: any, index: number) => {
              return (
                <div className="dj-content" key={index}>
                  {catelist &&
                    catelist
                      .slice(index * 18, (index + 1) * 18)
                      .map((element: any) => {
                        return (
                          <RadioItemWrapper key={element.id} imgUrl={element.picWebUrl}>
                            <div className="item-img"></div>
                          </RadioItemWrapper>
                        );
                      })}
                </div>
              );
            })}
          </Carousel>
          <div
            className="my-right sprite-dj-btn"
            onClick={() => {
              handleChange(true);
            }}
          ></div>
        </div>

        <Outlet></Outlet>
      </div>
    </RadioWrapper>
  );
};
export default memo(DJRadio);
