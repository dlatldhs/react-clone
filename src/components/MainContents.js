import IndexImage from "./IndexImage";
import React, { useState, useEffect ,Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import ReactDOM from "react-dom";
import Slider from "react-slick";

const mainPageImages = [
  { url: IndexImage[0].path },
  { url: IndexImage[1].path },
  { url: IndexImage[2].path },
  { url: IndexImage[3].path }
];

const mainContentsImages = [ // main page swiper data
  { url: IndexImage[4].path },
  { url: IndexImage[5].path },
  { url: IndexImage[6].path },
  { url: IndexImage[7].path }
]

export default function MainContents() {
  
  return (
    <div className="main">
      <SimpleImageSlider
        width={1519}
        height={700}
        images={mainPageImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />

      <div className="Collabo-item non-scroll">
        <div className="Collabo-main-item-box">
          <div className="main-contents-swiper">
            <img src={IndexImage[4].path} alt="main_contents" />
            <img src={IndexImage[5].path} alt="main_contents" />
            <img src={IndexImage[6].path} alt="main_contents" />
            <img src={IndexImage[7].path} alt="main_contents" />
          </div>
          <button type="button" className="collabo-left-btn">❮</button>
          <button type="button" className="collabo-right-btn">❯</button>
          <div className="item-info">
            <h3>{IndexImage[4].subTitle}</h3>
            <h2>{IndexImage[4].mainTitle}</h2>
            <div className="ditail-button-a">
              <a href="./index/">자세히 보기</a>
            </div>
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
