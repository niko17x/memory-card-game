import React from "react";

function RestartBtn(props) {
  const handleClick = () => {
    // Change 'playGame' state from false to true :
    props.setGame(true);
  };

  return <button onClick={handleClick}>Restart Game</button>;
}

export default RestartBtn;
