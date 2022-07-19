import IndexImage from "./IndexImage";
import React, { useState, useEffect ,Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import SliderData1 from "./SliderData1";
import SliderData2 from "./SliderData2";
import ImageSlider from "./ImageSlider";

export default function MainContents() {

  const SliderDataaa = [
    { url: IndexImage[0].path },
    { url: IndexImage[1].path },
    { url: IndexImage[2].path },
    { url: IndexImage[3].path }
  ];

  const slides = SliderData1

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  
  return (
    <div className="main">
      <div className="main-slider">
        <p className="main-left-arrow" onClick={prevSlide}>〈</p>
        <p className="main-right-arrow" onClick={nextSlide}>〉</p>
        {SliderData1.map((slide,index) => {
          return (
            <div
              className={index === current ? "main-slide active" : "main-slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.path} alt="mainpage-img" className="image" />
              )}
              <div className="main-page-info">
                <h4 className="main-page-title">{SliderData1[index].mainTitle}</h4>
              </div>
            </div>
          )
        })}
      </div>

      <div className="Collabo-item non-scroll">
        <ImageSlider slides={SliderData2}/> 
       </div>

      
      <div className="long-picture">
        <img src="https://github.com/dlatldhs/react-clone/blob/main/public/imgs/main_contents_long_image.jpg?raw=true" alt="long_img" />
        <div className="item-info">
          <h2>아디다스 x 구찌</h2>
          <div className="ditail-button-a">
            <a href="./index/">자세히 보기</a>
          </div>
        </div>
      </div>

      <div className="gucci-story">
        <div className="gucci-story-contents">
          <div className="title-box">
            <h2 id="gucci-story-title">구찌 스토리</h2>
          </div>
          <div className="main-contents">
            {/* <div className="left-storys"> */}
              <div className="story-item">
                <img src="https://raw.githubusercontent.com/dlatldhs/react-clone/main/public/imgs/newspaper_main_contents_img_1.webp" alt="story-img-left" />
                <h3>카스텔 델 몬테(Castel del Monte)를 가다</h3>
                <a href="./test">패션쇼 장소 ➔</a>
              </div>
              <div className="story-item">
                <img src="https://raw.githubusercontent.com/dlatldhs/react-clone/main/public/imgs/newspaper_main_contents_img_3.webp" alt="story-img-left" />
                <h3>런웨이 자세히 보기</h3>
                <a href="./test">컬렉션 탐구 ➔</a>
              </div>
            {/* </div> */}
            {/* <div className="center-story"> */}
              <div className="story-item">
                <img src="https://raw.githubusercontent.com/dlatldhs/react-clone/main/public/imgs/newspaper_main_contents_img_4.webp" alt="story-img-center" />
                <h3>구찌 코스모고니(Cosmogonie) 룩</h3>
                <a href="./test">컬렉션 살펴보기 ➔</a>
              </div>
            {/* </div> */}
            {/* <div className="right-storys"> */}
              <div className="story-item">
                <img src="https://raw.githubusercontent.com/dlatldhs/react-clone/main/public/imgs/newspaper_main_contents_img_2.webp" alt="story-img-right" />
                <h3>구찌 코스모고니(Cosmogonie) 게스트</h3>
                <a href="./test">포토 갤러리 ➔</a>
              </div>
              <div className="story-item">
                <img src="https://raw.githubusercontent.com/dlatldhs/react-clone/main/public/imgs/newspaper_main_contents_img_5.webp" alt="story-img-right" />
                <h3>구찌 코스모고니(Cosmogonie) 뷰티</h3>
                <a href="./test">패션쇼 메이크업 ➔</a>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>

    </div>
  );
}
