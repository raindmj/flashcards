import React from "react";
import { Link } from "react-router-dom";

function StudyNav({ deckId, currentDeck }) {
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
          Study
        </li>
      </ol>
    </nav>
  );
}

export default StudyNav;
