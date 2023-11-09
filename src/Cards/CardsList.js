import React from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { deleteCard, readDeck } from "../utils/api";

function CardsList({ currentDeck, setCurrentDeck }) {
  // console.log(currentDeck);

  const {deckId} = useParams();
  // console.log(deckId);

  const handleDelete = async (card) => {
    //if user clicks okay,
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      //delete card with matching card id
      await deleteCard(card.id);
      //get the current deck with matching deck id
      const updatedDeck = await readDeck(deckId);
      //set the current deck to be the updatedDeck
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
