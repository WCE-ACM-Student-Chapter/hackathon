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
    <div>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              {}
            </div>
            <div className="media-icons">
              {}
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box1 input-box1">
              {}
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright ©2024, All rights reserved by WCE_ACM</span>
            
          </div>
        </div>
      </footer>
      {template && (
        <div className="template">
          <div className="template-left">
            <p>
              Join us to{" "}
              <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Gear Up</a>,
              where we will be hosting PUBLIC workshops, tech talks, panel
              discussions, and career sessions!
            </p>
          </div>
          <img
            alt="img"
            onClick={hideTemplate}
            src={cross}
            className="template-close"
          />
        </div>
      )}
    </div>
  );
}
