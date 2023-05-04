import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={{ cursor: "pointer" }}>
      {text}
    </button>
  );
};

export default Button;
