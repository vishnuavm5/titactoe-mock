import React from "react";
import { useState } from "react";
import "./Square.css";

const Square = ({ value, onClick }) => {
  //   const [val, setVal] = useState(null);
  //   function handleClick() {
  //     setVal("X");
  //   }

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
