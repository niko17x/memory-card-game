import React from "react";
import cardData from "../cardData";

function Card() {
  return (
    <div className="card--container">
      {cardData.map((card, index) => (
        <div key={index} className="card--img">
          <img id={index} src={card} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Card;
