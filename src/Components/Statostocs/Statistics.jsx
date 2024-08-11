import React from "react";
import "./Statistics.css";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

function Statistics({ title, value }) {
  return (
    <div className="Statistics">
      <h3>{title}</h3>
      <h4>{value}</h4>
      {value < 300000 ? (
        <span className="Arrows">
          <FaArrowDown className="red" />
        </span>
      ) : (
        <span className="Arrows">
          <FaArrowUp className="green" />
        </span>
      )}
    </div>
  );
}

export default Statistics;
