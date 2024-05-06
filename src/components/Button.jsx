import React from "react";

const Button = ({ link, color, children }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: `${color}` }}
      target="_blank"
      rel="noreferrer"
      href={link}
    >
      {children}
    </button>
  );
};

export default Button;
