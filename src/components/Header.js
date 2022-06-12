// GUCCI Header ( menuBar & login & logo & heratItem & heartItemList )
export default function Header(props) {
  // console.log("props.backPosition : " + props.backPosition);
  return (
    <header style={{ backgroundPositionY: props.backPosition / 2 }}>
      <div className="header-background">
        <ul className="left-menu-bar">
          <li>대한민국</li>
          <li>한국어</li>
          <li>고객 서비스</li>
        </ul>

        <ul className="right-menu-bar">
          <li>쇼핑백</li>
          <li>🤍</li>
          <li>로그인</li>
        </ul>

        <div className="serach-menu-bar">
          <img src={'imgs\\search-33.png'} alt="header serach logo"/>
        </div>

        <div className="header-logo">
          <a tabindex="5" href="/index.html/" className="logo">
            GUCCI
          </a>
        </div>
        <ul className="main-menu-bar">
          <li>
            <a href="test1">WHAT'S NEW</a>
          </li>
          <li>
            <a href="test2">핸드백</a>
          </li>
          <li>
            <a href="test1">여성</a>
          </li>
          <li>
            <a href="test1">남성</a>
          </li>
          <li>
            <a href="test1">주얼리 & 시계</a>
          </li>
          <li>
            <a href="test1">뷰티</a>
          </li>
          <li>
            <a href="test1">데코 & 라이프 스타일</a>
          </li>
          <li>
            <a href="test1">선물 제안</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
