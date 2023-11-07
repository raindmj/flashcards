import React from "react";

function NotEnoughCards({currentDeck}) {
    return <div>
        <h2>Not enough cards.</h2>
        <p>You need at least 3 cards to study. There are {currentDeck.cards.length} cards in this deck.</p>
        <button type="button" className="btn btn-primary">Add Cards</button>
    </div>
}

export default NotEnoughCards;