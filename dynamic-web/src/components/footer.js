import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2Right = document.querySelector(".footer");
      const section2Top = section2Right.offsetTop;
      const windowTop = window.scrollY + window.innerHeight;

      if (windowTop > section2Top) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="footer">
      <div className={`footer-anime ${shouldAnimate ? "active" : ""}`}>
        <div style={{ display: "flex", gap: ".3rem" }}>
          <FaFacebook className="facebook" size={30} />
          <FaTwitter className="twitter" size={30} />
          <FaInstagram className="instagram" size={30} />
        </div>
        <div className="fo-design">
          <img src="https://squbix.com/static/media/squbix.51677a2c489c783b8066d875a17e7e22.svg"></img>
          <h1>SQUBIX DIGITAL</h1>
          <p2>India | Singapore | Australia</p2><br/><br/>
          <h1>Socials</h1>
        </div>
        <p2>© Copyright 2016 - 2023 Squbix Digital Pvt. Ltd. | All Rights Reserved.</p2>
      </div>
    </div>
  );
}

export default Footer;
