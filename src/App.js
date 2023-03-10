import React from "react";
import "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";

window.addEventListener("click", (e) => {
  console.log(e.target);
});

function App() {
  // State that determines if current round is still going or ended :

  return (
    <div className="app--container">
      <Header />
      <Main />
    </div>
  );
}

export default App;
