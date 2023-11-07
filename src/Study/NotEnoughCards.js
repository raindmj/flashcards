import React from "react";

function NotEnoughCards({deck}) {
    return <div>
        <h1>{deck.name}: Study</h1>
        <h2>Not enough cards.</h2>
        <p>You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.</p>
        <button type="button" className="btn btn-primary">Add Cards</button>
    </div>
}