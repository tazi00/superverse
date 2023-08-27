import React from "react";

function Button({ children, variant }) {
  const type = {
    primary: "pm-btn",
  };
  return (
    <>
      <button className={`${type[variant]}`}>{children}</button>
    </>
  );
}

export default Button;
