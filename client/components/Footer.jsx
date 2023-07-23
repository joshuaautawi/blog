import React from "react";
import Logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with love and <b>React</b>
      </span>
    </footer>
  );
};
