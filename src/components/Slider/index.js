import {
  faAngleLeft,
  faAngleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { banners } from "../../api/images";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
import { memo, useRef, useState, useEffect } from "react";

const cx = classNames.bind(styles);

function Slider() {
  const sliderListElement = useRef();
  let bannerListLength = banners.length;
  let position = 0;

  const [sliderWidth, setSliderWidth] = useState(0);

  let maxPosition = (bannerListLength - 1) * sliderWidth;

  useEffect(() => {
    setSliderWidth(sliderListElement.current.offsetWidth);
  }, [sliderListElement]);

  const handlePrev = () => {
    position = position - sliderWidth;
    if (position < 0) {
      position = maxPosition;
    }
    sliderListElement.current.style = `transform: translateX(-${position}px)`;
  };

  const handleNext = () => {
    position = position + sliderWidth;
    if (position > maxPosition) {
      position = 0;
    }
    sliderListElement.current.style = `transform: translateX(-${position}px)`;
  };

  const handleChangeBanner = (index) => {
    position = sliderWidth * index;
    sliderListElement.current.style = `transform: translateX(-${position}px)`;
  };

  return (
    <div className={cx("slider")}>
      <div className={cx("slider-prev")} onClick={handlePrev}>
        <FontAwesomeIcon icon={faAngleLeft} className={cx("slider-icon")} />
      </div>
      <div className={cx("slider-main")}>
        <div ref={sliderListElement} className={cx("slider-list")}>
          {banners.map((banner, index) => {
            return (
              <div key={index} className={cx("slider-item")}>
                <img src={banner} alt="Banner" className={cx("slider-image")} />
              </div>
            );
          })}
        </div>
      </div>
      <ul className={cx("slider-dot-list")}>
        {banners.map((banner, index) => {
          return (
            <li
              key={index}
              className={cx("slider-dot-item")}
              onClick={() => handleChangeBanner(index)}
            >
              <FontAwesomeIcon icon={faCircle} />
            </li>
          );
        })}
      </ul>
      <div className={cx("slider-next")} onClick={handleNext}>
        <FontAwesomeIcon icon={faAngleRight} className={cx("slider-icon")} />
      </div>
    </div>
  );
}

export default memo(Slider);
