import React from "react";
import cardData from "../cardData";

function Card(props) {
  // Change the value of 'i' based on the current level :
  const setCardsByLevel = () => {
    let level = props.level;
    let i = 0;
    switch (level) {
      case 1:
        i = 3;
        break;
      case 2:
        i = 4;
        break;
      case 3:
        i = 5;
        break;
      case 4:
        i = 6;
        break;
      case 5:
        i = 7;
        break;
      case 6:
        i = 8;
        break;
      default:
        i = null;
    }
    return i;
  };

  const createNewCardSet = () => {
    let currentLevel = setCardsByLevel();
    let result = [];

    while (result.length < currentLevel) {
      const randomIndex = Math.floor(Math.random() * 6);
      const newCard = {
        url: cardData[randomIndex].url,
        id: cardData[randomIndex].id,
      };
      if (!result.some((card) => card.id === newCard.id)) {
        result.push(newCard);
      }
    }
    return result;
  };

  const randomizeNewCardSet = (a, b) => {
    return Math.random() - 0.5;
  };

  const duplicateNewCardSet = () => {
    let allNewCardSet = createNewCardSet();
    let duplicatedCards = [];

    allNewCardSet.map((card) => {
      for (let i = 0; i < 2; i++) {
        duplicatedCards.push(card);
      }
      return duplicatedCards;
    });
    duplicatedCards.sort(randomizeNewCardSet);
    return duplicatedCards;
  };

  const displayNewCardSet = () => {
    const newCards = duplicateNewCardSet();
    let allCards = [];
    newCards.map((card, index) =>
      allCards.push(
        <div key={index} className="card--img">
          <img id={card.id} src={card.url} alt="" />
        </div>
      )
    );
    return allCards;
  };

  // return <div className="card--container">{duplicateNewCardSet()}</div>;
  return <div className="card--container">{displayNewCardSet()}</div>;
}

export default Card;
