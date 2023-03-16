// DISPLAY LEVELS 1 - 10 FOR PLAYER.

import React from "react";

function Levels(props) {
  return (
    <div className="levels--container">
      <span>Level: {props.currentLevel}</span>
    </div>
  );
}

export default Levels;
