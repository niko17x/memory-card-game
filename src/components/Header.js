// ALL HEADER DATA GOES HERE :

import React from "react";

function Header() {
  return (
    <div className="header--main">
      <h1>Memory Game</h1>
      <img src="../brain-img.svg" alt="" />
      <p>
        Pair all the matching cards. If all cards are paired in all 10 levels,
        you win!
      </p>
    </div>
  );
}

export default Header;
