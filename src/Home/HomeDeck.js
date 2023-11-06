import React from "react";

function HomeDeck({ deck }) {
  return (
    <div className="border rounded p-3 my-2">
      <div className="d-flex justify-content-between">
        <h4>{deck.name}</h4>
        <p className="text-end">{deck.cards.length} cards</p>
      </div>
      <p>{deck.description}</p>
      <div>
        <button type="button" className="btn btn-secondary mr-2">
          View
        </button>
        <button type="button" className="btn btn-primary">
          Study
        </button>
        <button type="button" className="btn btn-danger float-right">
          Delete
        </button>
      </div>
    </div>
  );
}

export default HomeDeck;
