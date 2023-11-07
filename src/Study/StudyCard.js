import React, { useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";

function StudyCard({ currentDeck }) {
  // console.log(currentDeck)
  const [isFlipped, setIsFlipped] = useState(false);
  const [index, setIndex] = useState(0);

  // console.log(index);

  const cards = currentDeck.cards;
  // console.log(cards);

  const history = useHistory();

  function handleBack() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  function handleNext() {
    if (index < cards.length) {
      setIndex(index + 1);
    }
    if (isFlipped === true) {
      setIsFlipped(false);
    }
  }

  function handleRestart() {
    if (window.confirm("Restart cards? Click 'cancel' to return to the home page.")) {
      setIndex(0);
    } else {
      history.push("/");
    }
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Card {index + 1} of {cards.length}
          </h5>
          <p className="card-text">
            {isFlipped ? cards[index].back : cards[index].front}
          </p>
          {index > 0 && (
            <button
              type="button"
              className="btn btn-dark mr-2"
              onClick={handleBack}
            >
              Back
            </button>
          )}
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={handleFlip}
          >
            {isFlipped ? "Flip to Front" : "Flip to Back"}
          </button>
          {(index + 1 < cards.length && isFlipped === true) && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNext}
            >
              Next
            </button>
          )}
          {index === (cards.length - 1) && (
            <button
              type="button"
              className="btn btn-success"
              onClick={handleRestart}
            >
              Restart Deck
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudyCard;
