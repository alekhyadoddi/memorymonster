import React from "react";
import "./game.css";



const Score = props => (
  <div className="totalScore">
    <h3 className="score">Total Score{props.total}</h3>
    <h3 className="message">{props.message}</h3>
  </div>
);

export default Score;
