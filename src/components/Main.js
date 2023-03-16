// MAIN SECTION UNDER HEADER.

import { v4 as uuidv4 } from "uuid";
import React from "react";
import Card from "./Card";
import Timer from "./Timer";
import Levels from "./Levels";
import cardData from "../cardData";
import RestartBtn from "./RestartBtn";

function Main() {
  const [gameLevel, setGameLevel] = React.useState(1);
  const [currentCards, setCurrentCards] = React.useState(cardData);
  const [cardIds, setCardIds] = React.useState(null);
  const [playGame, setPlayGame] = React.useState(true);

  React.useEffect(() => {
    const newCardSet = duplicateNewCardSet();
    setCurrentCards(newCardSet);
  }, [playGame, gameLevel]);

  console.log(playGame);

  const handleClick = (e) => {
    revealCard(e);
    triggerNextLevel();
    trackPlayedCards(e);
  };

  const triggerNextLevel = () => {
    return currentCards.every((card) => !card.hidden)
      ? setGameLevel((prevLevel) => prevLevel + 1)
      : null;
  };

  const revealCard = (e) => {
    const dataUuid =
      e.currentTarget.firstElementChild.getAttribute("data-uuid");
    setCurrentCards((prevCards) =>
      prevCards.map((card) => {
        return card.uuid === dataUuid ? { ...card, hidden: false } : card;
      })
    );
  };

  const trackPlayedCards = (e) => {
    // Account for parent div click and child image click :
    const targetElement =
      e.target.tagName === "IMG" ? e.target : e.target.firstElementChild;

    if (targetElement.hasAttribute("id")) {
      // If state is equal to null, then store new state and just return :
      if (!cardIds) return setCardIds(parseInt(targetElement.id));

      // If user clicks on non-matching cards :
      if (parseInt(targetElement.id) !== cardIds) {
        console.log("Lose");
        setPlayGame(false);
        // If user clicks on matching cards :
      } else {
        console.log("Win");
      }
      setCardIds(null); // Reset to null after every 2 card clicks.
    }
  };

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
    const uniqueCards = new Set(cardData.map((card) => card.id)); // 'set' => store unique values only.
    const maxCards = Math.min(cardQuantityByLevel, uniqueCards.size);
    const result = [];
    const selectedIds = new Set();

    while (result.length < maxCards) {
      const randomIndex = Math.floor(Math.random() * cardData.length);
      const newCard = {
        url: cardData[randomIndex].url,
        id: parseInt(cardData[randomIndex].id),
        hidden: true,
      };
      if (uniqueCards.has(newCard.id) && !selectedIds.has(newCard.id)) {
        result.push({ ...newCard, uuid: uuidv4() });
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
        duplicatedCards.push({ ...card, uuid: uuidv4() }); // Spread the card properties into a new object
      }
    });
    duplicatedCards.sort(randomizeNewCardSet);
    return duplicatedCards;
  };

  const gameIsRestarted = () => {
    // if (!playGame)
  };

  return (
    <>
      <div className="main--score_tracker">
        <Timer />
        <Levels currentLevel={gameLevel} />
      </div>
      {playGame ? (
        <Card
          level={gameLevel}
          handleClick={handleClick}
          newCards={currentCards}
        />
      ) : (
        <RestartBtn setGame={setPlayGame} />
      )}
    </>
  );
}

export default Main;
