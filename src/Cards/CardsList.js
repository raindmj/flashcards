import React from "react";
import Card from "./Card";
import { Link, useParams, useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard, readDeck } from "../utils/api";

function CardsList({ currentDeck, setCurrentDeck }) {
  // console.log(currentDeck);

  const params = useParams();
  // console.log(params);
  const deckId = params.deckId;

  const handleDelete = async (card) => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      await deleteCard(card.id);
      const updatedDeck = await readDeck(deckId);
      setCurrentDeck(updatedDeck);
    }
  };

  const cards = currentDeck.cards;
  // console.log(cards);

  return (
    <div className="pb-4">
      {cards.map((card) => (
        <Card card={card} key={card.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default CardsList;
