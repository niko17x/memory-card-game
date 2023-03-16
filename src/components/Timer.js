// TIMER TO KEEP TRACK OF HOW FAST PLAYER CAN FINISH GAME.

import React from "react";

function Timer() {
  const [timer, setTimer] = React.useState(0);
  const countRef = React.useRef(null);

  function gameTimer() {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  return (
    <div className="timer--container" onClick={gameTimer}>
      <span>Timer: </span>
      {timer}
    </div>
  );
}

export default Timer;
