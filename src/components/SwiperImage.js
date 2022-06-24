import React, { useState } from "react";
import { SwiperData } from "./SwiperData";

const SwiperImage = () => {
  const [current, setCurrent] = useState(0);
  const length = slide.length;

  return (
    <>
      {SwiperData.map((slide, index) => {
        return <img src={slide.path} alt="item-img" />;
      })}
    </>
  );
};

export default SwiperImage;
