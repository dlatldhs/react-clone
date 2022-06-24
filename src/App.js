import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContents from "./components/MainContents";

import "./headerStyle.css";
import "./mainStyle.css";
import "./footerStyle.css";
import React, { useState, useEffect } from "react";
import SwiperImage from "./components/SwiperImage";

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
      {/* <Header pwd={position} />
      <MainContents />
      <Footer /> */}
      <SwiperImage />
    </div>
  );
}
