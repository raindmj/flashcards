import React, { useState, useEffect } from "react";
import { listDecks, deleteDeck } from "../utils/api";
import HomeDeck from "./HomeDeck";

function DecksList() {
  const [decks, setDecks] = useState([]);

  async function getDecks() {
    const data = await listDecks();
    setDecks(data);
  }

  useEffect(() => {
    getDecks();
  }, []);

  return (
    <div>
      {decks.map((deck) => (
        <HomeDeck deck={deck} key={deck.id} getDecks={getDecks} />
      ))}
    </div>
  );
}

export default DecksList;
