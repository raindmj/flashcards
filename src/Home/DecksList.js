import React, { useState, useEffect } from "react";
import { listDecks, deleteDeck } from "../utils/api";
import HomeDeck from "./HomeDeck";
import {
  Route,
  Switch,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

function DecksList() {
  const [decks, setDecks] = useState([]);
  async function getDecks() {
    const data = await listDecks();
    setDecks(data);
  }

  useEffect(() => {
    getDecks();
  }, []);

  const deleteHandler = async (deck) => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      await deleteDeck(deck.id);
      getDecks();
    }
  };

  return (
    <div>
      {decks.map((deck) => (
        <HomeDeck deck={deck} key={deck.id} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
}

export default DecksList;
