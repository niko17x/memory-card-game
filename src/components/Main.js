// MAIN SECTION UNDER HEADER.

import React from "react";
import Card from "./Card";
import Timer from "./Timer";
import Levels from "./Levels";

function Main() {
  const [gameLevel, setGameLevel] = React.useState(1);

  return (
    <>
      <div className="main--score_tracker">
        <Timer />
        <Levels currentLevel={gameLevel} />
      </div>
      <Card level={gameLevel} />
    </>
  );
}

export default Main;
