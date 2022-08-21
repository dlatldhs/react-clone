import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import NotFound from "./components/NotFound";

import "./style/popup.css";
import "./style/App.css";
import "./style/header.css";
import "./style/mainStyle.css";
import "./style/footerStyle.css";
import "./style/slider.css";
import React, { useState, useEffect } from "react";
import GucciItems from "./components/GucciItems";
import MainPage from "./components/MainPage";

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
      <BrowserRouter basename={process.env.BASE_URL}>
      {/* <HashRouter> */}
        <Header pwd={position} />
        <Routes>
          <Route path="react-clone/home" element={<MainPage />}></Route>
          <Route path="react-clone/home" element={<Footer />}></Route>
          <Route path="react-clone/Gucciitems" element={<GucciItems />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {/* </HashRouter> */}
      </BrowserRouter>
    </div>
  );
}
