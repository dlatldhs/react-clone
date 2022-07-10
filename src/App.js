import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContents from "./components/MainContents";
import SliderData from "./components/SliderData";
import ImageSlider from "./components/ImageSlider";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";

import "./headerStyle.css";
import "./mainStyle.css";
import "./footerStyle.css";
import "./slider.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import GucciItems from "./components/GucciItems";

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
      <BrowserRouter>
        <Header pwd={position} />
        <Routes>
          {/* <MainContents />
          <GucciItems />
          <Footer /> */}
          <Route path="/a" element={<MainContents />}></Route>
          <Route path="/a" element={<Footer />}></Route>
          <Route path="/b" element={<GucciItems />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <ImageSlider slides={SliderData}/> */}
    </div>
  );
}
