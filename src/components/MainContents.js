import IndexImage from "./IndexImage";
import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { url: IndexImage[0].path },
  { url: IndexImage[1].path },
  { url: IndexImage[2].path },
  { url: IndexImage[3].path },
];

export default function MainContents() {
  return (
    <div className="main">
      <SimpleImageSlider
        width={1600}
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />

      <div className="Collabo-item">

        <div className="Collabo-main-item-box">

          <img src="./imgs/main_contents_image_1.webp" alt="main_contents" />
          <button type="button" className="collabo-left-btn">❮</button>
          <button type="button" className="collabo-right-btn">❯</button>

        </div>

        <div className="item-info">

          <h2>[구찌 홀스빗 1955] 아디다스 x 구찌 미니백</h2>

          <div className="ditail-button-a">

            <a href="./index/">자세히 보기</a>

          </div>

        </div>
        
      </div>

      <div className="long-picture">
        <img src="./imgs/main_contents_long_image.jpg" alt="long_img" />
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
                <img src="./imgs/newspaper_main_contents_img_1.webp" alt="story-img-left" />
                <h3>카스텔 델 몬테(Castel del Monte)를 가다</h3>
                <a href="./test">패션쇼 장소 ➔</a>
              </div>
              <div className="story-item">
                <img src="./imgs/newspaper_main_contents_img_3.webp" alt="story-img-left" />
                <h3>런웨이 자세히 보기</h3>
                <a href="./test">컬렉션 탐구 ➔</a>
              </div>
            {/* </div> */}
            {/* <div className="center-story"> */}
              <div className="story-item">
                <img src="./imgs/newspaper_main_contents_img_4.webp" alt="story-img-center" />
                <h3>구찌 코스모고니(Cosmogonie) 룩</h3>
                <a href="./test">컬렉션 살펴보기 ➔</a>
              </div>
            {/* </div> */}
            {/* <div className="right-storys"> */}
              <div className="story-item">
                <img src="./imgs/newspaper_main_contents_img_2.webp" alt="story-img-right" />
                <h3>구찌 코스모고니(Cosmogonie) 게스트</h3>
                <a href="./test">포토 갤러리 ➔</a>
              </div>
              <div className="story-item">
                <img src="./imgs/newspaper_main_contents_img_5.webp" alt="story-img-right" />
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
