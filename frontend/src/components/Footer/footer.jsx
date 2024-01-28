import React, { useEffect, useState } from "react";
import "./footer.css";

export default function Footer() {
  const [template, setTemplate] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = () => {
    setTemplate(window.scrollY > 2800);
  };

  const hideTemplate = () => {
    setTemplate(false);
  };

  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            { }
          </div>
          <div className="media-icons">
            { }
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box1 input-box1">
            { }
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright ©2024, All rights reserved by WCE_ACM</span>

        </div>
      </div>
    </footer>
  );
}
