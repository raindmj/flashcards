import React from "react";
import { Link } from "react-router-dom";

function EditCardNav({ cardId, deckId, currentDeck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <span className="oi oi-home" /> Home
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{currentDeck.name}</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Edit Card {cardId}
        </li>
      </ol>
    </nav>
  );
}

export default EditCardNav;
