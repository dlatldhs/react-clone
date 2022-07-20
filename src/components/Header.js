import React , { useState } from 'react';


const Header = (props) => {
  const headerP = props.pwd;

  const [ showPopup , setShowPopup ] = useState(false);

  const togglePopup = (event) => {
    setShowPopup(!showPopup);
  };

  return (
    <header>
      <div className={headerP >= 149 ? "undo header" : "header"}>
        <ul className="service-bar">
          <li>대한민국</li>
          <li>한국어</li>
          <li className="open" onClick={togglePopup}>고객 서비스</li>
        </ul>
        {
          showPopup ? (
            <div className="popup">
              <div className="popup_inner">
                <div className="service-title">
                  <h1>고객 서비스</h1>
                  <span>GUCCI 대한민국</span>
                </div>
                <div className="service-items">
                  <div className="phone">
                    phone
                  </div>
                  <div className="email">
                    email
                  </div>
                  <div className="live-chat">
                    live-chat
                  </div>
                </div>
                <div>
                  <button className="close_btn"  onClick={togglePopup}>
                    Close me!
                  </button>
                </div>
              </div>
            </div>
          ) : null
        }
        <ul className="user-menu-bar">
          <a href="/gucci-cart">쇼핑백</a>
          <a href="/saved-items">🤍</a>
          <a href="/gucci-login">로그인</a>
        </ul>

        <div className="serach-menu-bar">
          <img src={'https://github.com/dlatldhs/react-clone/blob/main/public/imgs/search_icon_white.png?raw=true'} alt="header serach logo"/>
        </div>

        <div className={ headerP >= 149 ? "hidden gucci-logo" : "gucci-logo"}>
          <a tabindex="5" href="/" className="logo">
            GUCCI
          </a>
        </div>

        <ul className={ headerP >=149 ? "scoll-header main-contents-menu-bar" : "undo2 main-contents-menu-bar"} >
          <li>
            <a href="/news">WHAT'S NEW</a>
          </li>
          <li>
            <a href="/handback">핸드백</a>
          </li>
          <li>
            <a href="/woman">여성</a>
          </li>
          <li>
            <a href="/man">남성</a>
          </li>
          <li>
            <a href="/Jewelry-Clock">주얼리 & 시계</a>
          </li>
          <li>
            <a href="/Beauty">뷰티</a>
          </li>
          <li>
            <a href="/Decoration-lifeStyle">데코 & 라이프 스타일</a>
          </li>
          <li>
            <a href="/present">선물 제안</a>
          </li>
        </ul>

      </div>
    </header>
  );
}
export default Header;