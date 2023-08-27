import React from "react";
import Logo from "../img/Full logo6.png";
import { Link } from "react-router-dom";

function LogoBox() {
  return (
    <div className="logo-box">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
}

export default LogoBox;
