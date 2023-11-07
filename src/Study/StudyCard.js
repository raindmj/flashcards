import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

function StudyCard({ currentDeck }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  const cards = currentDeck.cards;
  console.log(cards)

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card </h5>
          <p className="card-text">Text</p>
          <button type="button" className="btn btn-secondary" onClick={handleFlip}>Flip</button>
        </div>
      </div>
    </div>
  );
}

export default StudyCard;
