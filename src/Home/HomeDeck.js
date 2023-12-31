import React from "react";
import { Link } from "react-router-dom";

function HomeDeck({ deck, handleDelete }) {
  // console.log("deck:", deck);

  return (
    <div className="border rounded p-3 my-2">
      <div className="d-flex justify-content-between">
        <h4>{deck.name}</h4>
        <p className="text-end">{deck.cards.length} cards</p>
      </div>
      <p>{deck.description}</p>
      <div>
        <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
          <span className="oi oi-eye" /> View
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
          <span className="oi oi-book" /> Study
        </Link>
        <button
          onClick={() => handleDelete(deck)}
          type="button"
          className="btn btn-danger float-right"
        >
          <span className="oi oi-trash" /> Delete
        </button>
      </div>
    </div>
  );
}

export default HomeDeck;
