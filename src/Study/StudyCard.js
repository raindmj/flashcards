import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function StudyCard({ currentDeck }) {
  // console.log(currentDeck)

  // declare state variable to control card flip
  const [isFlipped, setIsFlipped] = useState(false);

  // declare state variable to access index of cards array
  const [index, setIndex] = useState(0);
  // console.log(index);

  const cards = currentDeck.cards;
  // console.log(cards);

  const history = useHistory();

  function handleBack() {
    //on click, set the index to be the current index - 1
    setIndex(index - 1);

    //and if the card is flipped to the back (isFlipped === true), flips the card back to the front (set isFlipped === false)
    if (isFlipped === true) {
      setIsFlipped(false);
    }
  }

  //when flip is clicked, set the state of isFlipped to be the opposite of current state
  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  function handleNext() {
    //on click, set the index to be current index + 1
    setIndex(index + 1);

    //and if the card is flipped to the back (isFlipped === true), flips the card back to the front (set isFlipped === false)
    if (isFlipped === true) {
      setIsFlipped(false);
    }
  }

  function handleRestart() {
    if (
      window.confirm(
        "Restart cards? Click 'cancel' to return to the home page."
      )
    ) {
      //if the user clicks okay, set the index back to 0
      setIndex(0);
    } else {
      //if they cancel, redirect them to home page
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
          {index + 1 < cards.length && isFlipped === true && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNext}
            >
              Next
            </button>
          )}
          {index === cards.length - 1 && (
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
