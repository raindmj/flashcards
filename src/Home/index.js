import React from "react";
import DecksList from "./DecksList";

function Home() {
    return <div>
        <button type="button" className="btn btn-secondary"> Create Deck</button>
        <DecksList />
    </div>
}

export default Home;