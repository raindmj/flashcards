import React from "react";
import CardsList from "./CardsList";

function Cards({ currentDeck, setCurrentDeck }) {
  // console.log(currentDeck)
  return (
    <div>
      <h2>Cards</h2>
      <CardsList currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} />
    </div>
  );
}

export default Cards;
