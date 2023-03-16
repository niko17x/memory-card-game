// DEALS WITH CARD INFO ONLY - NO PLAYER FUNCTIONALITY :

import React from "react";

function Card(props) {
  // const setCardsByLevel = () => {
  //   let level = props.level;
  //   let i = 0;

  //   for (let chosenLevel = 1; chosenLevel < 11; chosenLevel++) {
  //     if (chosenLevel === level) {
  //       i = 2 + level;
  //     }
  //   }
  //   return i;
  // };

  // const createNewCardSet = () => {
  //   const cardQuantityByLevel = setCardsByLevel();
  //   const uniqueCards = new Set(cardData.map((card) => card.id)); // 'set' => unique values only.
  //   const maxCards = Math.min(cardQuantityByLevel, uniqueCards.size);
  //   const result = [];
  //   const selectedIds = new Set();

  //   while (result.length < maxCards) {
  //     const randomIndex = Math.floor(Math.random() * cardData.length);
  //     const newCard = {
  //       url: cardData[randomIndex].url,
  //       id: cardData[randomIndex].id,
  //     };
  //     // Validate the id is legitimate and id is not already in selectedIds :
  //     if (uniqueCards.has(newCard.id) && !selectedIds.has(newCard.id)) {
  //       result.push(newCard);
  //       selectedIds.add(newCard.id);
  //     }
  //   }
  //   return result;
  // };

  // const randomizeNewCardSet = (a, b) => {
  //   return Math.random() - 0.5;
  // };

  // const duplicateNewCardSet = () => {
  //   let allNewCardSet = createNewCardSet();
  //   let duplicatedCards = [];

  //   allNewCardSet.forEach((card) => {
  //     for (let i = 0; i < 2; i++) {
  //       duplicatedCards.push(card);
  //     }
  //   });
  //   duplicatedCards.sort(randomizeNewCardSet);
  //   return duplicatedCards;
  // };

  const displayNewCardSet = () => {
    // const newCards = duplicateNewCardSet();
    let allCards = [];
    props.newCards.map((card, index) =>
      allCards.push(
        <div key={index} className="card--img" onClick={props.handleClick}>
          <img
            id={card.id}
            data-uuid={card.uuid}
            src={card.url}
            alt=""
            // style={{ opacity: card.hidden ? 0 : 100 }}
            style={{ opacity: !card.hidden ? 0 : 100 }}
          />
        </div>
      )
    );
    return allCards;
  };

  return <div className="card--container">{displayNewCardSet()}</div>;
}

export default Card;

// Hide all cards by default. If clicked on, display: hidden attribute is removed to show the card.

// Initially, each card displayed on the page has a div parent for each image => After player clicks on an image, the object is returned but without the div parent causing the event handler to not respond properly => Resolve by either dealing with the div parent (removing it altogether) or having the click event return the proper code with parent div's...
