import { Carousel } from "antd";
import React, {
  ReactNode,
  useEffect,
  useRef,
  memo,
  ElementRef,
  useState,
} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getRadioDataAction } from "./store";
import { useBearDispatch, useBearSelector } from "@/store";
import { RadioWrapper } from "./style";
import { RadioItemWrapper } from "./style";
import classNames from "classnames";
import { useQuery } from "@/utils/useQuery";
interface IProps {
  children?: ReactNode;
}

const DJRadio: React.FC<IProps> = () => {
  const dispatch = useBearDispatch();
  const ref = useRef<ElementRef<typeof Carousel>>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id = 0, offset = 0 } = useQuery();
  const currentID = id;
  const { catelist } = useBearSelector((state) => ({
    catelist: state.radio.catelist,
  }));
  useEffect(() => {
    dispatch(getRadioDataAction());
  }, []);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  function handleChange(isNext: boolean) {
    if (isNext) {
      ref.current?.next();
    } else {
      ref.current?.prev();
    }
  }
  function handleClickTo(id: number) {
    const wantUrl = "/discover/djradio/category?id=" + id;
    navigate(wantUrl);
  }
  if (loading) return null;
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
                          <RadioItemWrapper
                            key={element.id}
                            imgUrl={element.picWebUrl}
                            onClick={() => handleClickTo(element.id)}
                            className={classNames({
                              active: currentID == element.id,
                            })}
                          >
                            <div className="img-content">
                              <div className="item-img"></div>
                            </div>

                            <span className="item-name">{element.name}</span>
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
