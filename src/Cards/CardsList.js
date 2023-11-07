import React from "react";
import Card from "./Card";

function CardsList({ currentDeck }) {
  console.log(currentDeck);

  const cards = currentDeck.cards;
  console.log(cards);

  return (
    <div className="pb-4">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default CardsList;
