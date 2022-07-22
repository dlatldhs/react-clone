import React , { useState } from 'react';
import XSVG from '../svg/XSvg';

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
                  <h1>
                    고객 서비스
                    <span>GUCCI 대한민국</span>
                  </h1>
                </div>
                <div className="service-items">
                  <h2>Gucci.com 및 온라인 구매 관련 문의</h2>

                  <div className="phone">

                    <div>

                      <h3>PHONE</h3>
                      <p>클라이언트서비스센터 운영 시간 월~일 / 오전 10시 ~ 오후 8시</p>
                    
                    </div>

                    <div>
                      
                      <div>
                        클라이언트서비스<br />센터 02.3452.1921
                      </div>

                    </div>

                  </div>

                  <div className="email">

                    <div>
                      <h3>EMAIL</h3>
                      <p>
                        '이메일 보내기' 버튼을 클릭하여 클라이언트서비스센터로 문의해 주시기 바랍니다.<br />자세한 문의 내용과 연락처를 남겨주시면 빠른 시일 내에 연락 드리겠습니다.
                      </p>
                    </div>

                    <div>
                      <a href="#">이메일 보내기</a>
                    </div>

                  </div>
                  <div className="live-chat">

                    <div>
                      <h3>라이브챗</h3>
                      <p>클라이언트서비스센터 라이브챗 운영 시간 월~일 / 오전 10시 ~ 오후 8시</p>
                    </div>

                    <div>
                      <button className="chat-btn">라이브챗 불가능</button>
                    </div>
                    
                  </div>
                </div>
                <div>
                  <span className="close-btn"  onClick={togglePopup}>
                    <XSVG />
                  </span>
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