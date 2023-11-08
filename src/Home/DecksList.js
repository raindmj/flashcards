import React, { useState, useEffect } from "react";
import { listDecks, deleteDeck } from "../utils/api";
import HomeDeck from "./HomeDeck";
import { Link } from "react-router-dom";

function DecksList() {
  const [decks, setDecks] = useState([]);

  async function getDecks() {
    const data = await listDecks();
    setDecks(data);
  }

  useEffect(() => {
    getDecks();
  }, []);

  const handleDelete = async (deck) => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      await deleteDeck(deck.id);
      getDecks();
    }
  };

  if (decks[0]) {
    return (
      <div className="mb-4">
        <Link to="/decks/new" className="btn btn-secondary">
          <span className="oi oi-plus" /> Create Deck
        </Link>
        {decks.map((deck) => (
          <HomeDeck deck={deck} key={deck.id} handleDelete={handleDelete} />
        ))}
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default DecksList;
