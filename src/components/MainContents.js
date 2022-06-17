import IndexImage from "./IndexImage";
import React, { useState, useEffect } from "react";

export default function MainContents() {
  let slideIndex = 1;
  const [imgs, setImg] = React.useState(IndexImage);
  // console.log(IndexImage[0].path);
  function showSlides( n ) {
    let i;
    let slides = document.getElementsByClassName("index");
    let dots = document.getElementsByClassName("dot");
    if ( n > slides.length ) {
      slideIndex = 1;

    }
    if ( n < 1 ) {
      slideIndex = slides.length;
    }
    for ( i = 0 ; i < slides.length ; i++ ) {
      slides[i].style.display = "none";
    }
    for ( i = 0 ; i < dots.length   ; i++ ) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].stlye.display = "block";
    dots[slideIndex-1].className += " active";
  }
  
  function plusSlides( n ) {
    showSlides(slideIndex += n );
  }
  function currentSlide( n ) {
    showSlides(slideIndex =  n );
  }

  return (
    <div className="main">
      <div className="home-slide-container">
        <div className="index fade">
          <img src={IndexImage[0].path} alt="main" />
        </div>
        <div className="index fade">
          <img src={IndexImage[1].path} alt="main" />
        </div>
        <div className="index fade">
          <img src={IndexImage[2].path} alt="main" />
        </div>
        <div className="index fade">
          <img src={IndexImage[3].path} alt="main" />
        </div>
      </div>
      <a className="prev" onClick="plusSlides(-1)">❮</a>
      <a className="next" onClick="plusSlides(1)">❯</a>

      <div>
        <span className="dot" onClick="currentSlide(1)"></span>
        <span className="dot" onClick="currentSlide(2)"></span>
        <span className="dot" onClick="currentSlide(3)"></span>
      </div>
      
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
