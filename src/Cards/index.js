import React from "react";
import CardsList from "./CardsList";

function Cards({ currentDeck }) {
    console.log(currentDeck)
  return (
    <div>
      <h2>Cards</h2>
      <CardsList currentDeck={currentDeck} />
    </div>
  );
}

export default Cards;
