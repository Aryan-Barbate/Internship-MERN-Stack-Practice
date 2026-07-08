import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} className="card-image" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <button>{props.buttonText}</button>
    </div>
  );
}

export default Card;