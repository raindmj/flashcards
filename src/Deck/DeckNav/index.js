import React from "react";
import { Link } from "react-router-dom";

function DeckNav({ currentDeck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <span className="oi oi-home" /> Home
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {currentDeck.name}
        </li>
      </ol>
    </nav>
  );
}

export default DeckNav;
