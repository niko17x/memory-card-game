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
      case 7:
        i = 9;
        break;
      case 8:
        i = 10;
        break;
      case 9:
        i = 11;
        break;
      case 10:
        i = 12;
        break;
      default:
        i = null;
    }
    return i;
  };

  const createNewCardSet = () => {
    const cardQuantityByLevel = setCardsByLevel();
    const uniqueCards = new Set(cardData.map((card) => card.id)); // 'set' => unique values only.
    const maxCards = Math.min(cardQuantityByLevel, uniqueCards.size);
    const result = [];

    const selectedIds = new Set();

    while (result.length < maxCards) {
      const randomIndex = Math.floor(Math.random() * cardData.length);
      const newCard = {
        url: cardData[randomIndex].url,
        id: cardData[randomIndex].id,
      };
      // Validate the id is legitimate and id is not already in selectedIds :
      if (uniqueCards.has(newCard.id) && !selectedIds.has(newCard.id)) {
        result.push(newCard);
        selectedIds.add(newCard.id);
      }
      console.log(maxCards);
      console.log(cardQuantityByLevel, uniqueCards.size);
    }
    return result;
  };

  const randomizeNewCardSet = (a, b) => {
    return Math.random() - 0.5;
  };

  const duplicateNewCardSet = () => {
    let allNewCardSet = createNewCardSet();
    let duplicatedCards = [];

    allNewCardSet.forEach((card) => {
      for (let i = 0; i < 2; i++) {
        duplicatedCards.push(card);
      }
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

  return <div className="card--container">{displayNewCardSet()}</div>;
}

export default Card;
