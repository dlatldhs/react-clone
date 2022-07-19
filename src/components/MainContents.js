import React, { useState, useEffect ,Component } from "react";

import SliderData1 from "../data/SliderData1";
import SliderData2 from "../data/SliderData2";
import ImageSlider from "./ImageSlider";
import MainImageSlider from "./MainImageSlider";

export default function MainContents() {

  return (
    <div className="main">
      <MainImageSlider slides={SliderData1}/>
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

              <div className="story-item">
                <img src="https://raw.githubusercontent.com/dlatldhs/react-clone/main/public/imgs/newspaper_main_contents_img_4.webp" alt="story-img-center" />
                <h3>구찌 코스모고니(Cosmogonie) 룩</h3>
                <a href="./test">컬렉션 살펴보기 ➔</a>
              </div>

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

          </div>

        </div>

      </div>

    </div>
  );
}
