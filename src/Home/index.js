import React from "react";
import DecksList from "./DecksList";

function Home({decks}) {
    return <div>
        <button type="button" className="btn btn-secondary"> Create Deck</button>
        <DecksList decks={decks} />
    </div>
}

export default Home;