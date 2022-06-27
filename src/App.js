import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContents from "./components/MainContents";
import SliderData from "./components/SliderData";
import ImageSlider from "./components/ImageSlider";

import "./headerStyle.css";
import "./mainStyle.css";
import "./footerStyle.css";
import "./slider.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

export default function App() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header pwd={position} />
      <MainContents />
      <Footer />
      {/* <ImageSlider slides={SliderData}/> */}
    </div>
  );
}
