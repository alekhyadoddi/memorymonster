import React from "react";
import "./game.css";

const Card = props => (
  <div className="card image hover">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.clickrearrange(props.id)}/>
  </div>
);

export default Card;
