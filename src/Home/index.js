import React from "react";
import DecksList from "./DecksList";
import { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/decks/new" className="btn btn-secondary">
        Create Deck
      </Link>
      <DecksList />
    </div>
  );
}

export default Home;
