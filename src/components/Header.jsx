import { useEffect, useState } from "react";
import logo from "../img/logo.png";
export default function Header() {
  const [show, setShow] = useState(true);

  function handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      setShow(true);
    } else setShow(false);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" width="150px" />
      </div>

      <nav className="nav">
        <div className="menu-toggle" onClick={() => setShow(!show)}>
          &#9776;
        </div>
        {show ? (
          <ul className="nav-list">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="cars">Cars</a>
            </li>
            <li>
              <a href="futures">Futures</a>
            </li>
            <li>
              <a href="help">Help</a>
            </li>
          </ul>
        ) : (
          <>
            <img src={logo} alt="logo" width="150px" />{" "}
            <i className="fa-brands fa-app-store-ios  app-store-link"></i>
          </>
        )}
      </nav>
      <div className="app-link">
        <button className="app-download">
          <i className="fa-brands fa-apple"></i>Download App
        </button>
      </div>
    </div>
  );
}
