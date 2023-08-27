import React from "react";
import { Link } from "react-router-dom";

function RegisterBox() {
  const registerList = [
    {
      label: "Log in",
      link: "/login",
      class: "login",
    },
    {
      label: "Sign up",
      link: "/signup",
      class: "signup",
    },
  ];

  return (
    <div className="register-box">
      <ul>
        {registerList.map((item) => (
          <li key={item.link}>
            <Link className={item.class} to={item.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegisterBox;
