import React from "react";
import {
  Link
} from "react-router-dom";
import { deleteDeck } from "../utils/api";

function HomeDeck({ deck, getDecks }) {
  const deleteHandler = async (deck) => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      await deleteDeck(deck.id);
      getDecks();
    }
  };

  return (
    <div className="border rounded p-3 my-2">
      <div className="d-flex justify-content-between">
        <h4>{deck.name}</h4>
        <p className="text-end">{deck.cards.length} cards</p>
      </div>
      <p>{deck.description}</p>
      <div>
        <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
          View
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
          Study
        </Link>
        <button
          onClick={() => deleteHandler(deck)}
          type="button"
          className="btn btn-danger float-right"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default HomeDeck;
