// MAIN SECTION UNDER HEADER.

import React from "react";
import Card from "./Card";
import Timer from "./Timer";
import Levels from "./Levels";
import cardData from "../cardData";

function Main() {
  const [gameLevel, setGameLevel] = React.useState(1);
  const [currentCards, setCurrentCards] = React.useState(cardData);

  // console.log(currentCards);

  // Generate new cards whenever gameLevel changes :
  // * Remember => useEffect runs one time in the initial phase - so on load, it will render. *
  React.useEffect(() => {
    // If gameLevel changes state, then re-render a new set of cards here...
    const newCardSet = duplicateNewCardSet();
    setCurrentCards(newCardSet);
  }, [gameLevel]);

  const handleClick = (e) => {
    revealCard(e);
    triggerNextLevel();
  };

  const triggerNextLevel = () => {
    // console.log("gameLevel", gameLevel);
    // console.log("currentCards", currentCards);
    return currentCards.every((card) => !card.hidden)
      ? setGameLevel((prevLevel) => prevLevel + 1)
      : null;
  };

  // ??? Currently causing both matching cards to be revealed on click instead of just one.
  // If player clicks on card, remove display: hidden :
  const revealCard = (e) => {
    setCurrentCards((prevCards) =>
      prevCards.map((card) => {
        // console.log(e.target.firstElementChild.id);
        return card.id === parseInt(e.target.firstElementChild.id)
          ? { ...card, hidden: false }
          : card;
      })
    );
    // console.log(currentCards);
  };

  // CARD.JS transfer :
  const setCardsByLevel = () => {
    let level = gameLevel;
    let i = 0;

    for (let chosenLevel = 1; chosenLevel < 11; chosenLevel++) {
      if (chosenLevel === level) {
        i = 2 + level;
      }
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
        hidden: true,
      };
      // Validate the id is legitimate and id is not already in selectedIds :
      if (uniqueCards.has(newCard.id) && !selectedIds.has(newCard.id)) {
        result.push(newCard);
        selectedIds.add(newCard.id);
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

    allNewCardSet.forEach((card) => {
      for (let i = 0; i < 2; i++) {
        duplicatedCards.push(card);
      }
    });
    duplicatedCards.sort(randomizeNewCardSet);
    return duplicatedCards;
  };

  return (
    <>
      <div className="main--score_tracker">
        <Timer />
        <Levels currentLevel={gameLevel} />
      </div>
      <Card
        level={gameLevel}
        // handleClick={revealCard}
        handleClick={handleClick}
        // newCards={duplicateNewCardSet()}
        newCards={currentCards}
      />
    </>
  );
}

export default Main;
