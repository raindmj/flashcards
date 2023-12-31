import React from "react";
import DecksList from "./DecksList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/decks/new" className="btn btn-secondary">
          <span className="oi oi-plus" /> Create Deck
        </Link>
      <DecksList />
    </div>
  );
}

export default Home;
