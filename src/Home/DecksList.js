import React, {useState, useEffect} from "react";
import { listDecks } from "../utils/api";
import HomeDeck from "./HomeDeck";

function DecksList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getDecks() {
        const data = await listDecks();
        setDecks(data);
    }
    getDecks();
  }, [])

  return <div>
    {decks.map((deck) => <HomeDeck deck={deck} decks={decks} setDecks={setDecks} key={deck.id} />)}
  </div>
}

export default DecksList;
