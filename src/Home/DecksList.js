import React, { useState, useEffect } from "react";
import { listDecks, deleteDeck } from "../utils/api";
import HomeDeck from "./HomeDeck";
import { Link } from "react-router-dom";
import NoDecksFound from "./NoDecksFound";

function DecksList() {
  const [decks, setDecks] = useState([]);

  async function getDecks() {
    //fetch the list of decks
    const data = await listDecks();
    //set the decks state variable to be the fetched data
    setDecks(data);
  }

  //call getDecks on mount
  useEffect(() => {
    getDecks();
  }, []);

  async function handleDelete(deck) {
    //if user clicks okay,
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      //delete the deck with the matching deck id
      await deleteDeck(deck.id);
      //fetch the updated decks list
      getDecks();
      // another way to do it without refetching decks list:
      // const newList = decks.filter((newDeck) => newDeck.id !== deck.id)
      // setDecks(newList);
    }
  }

  return (
    <div className="mb-4">
      {/* map through the decks list to access each individual deck and display its component */}
      {decks.map((deck) => (
        <HomeDeck deck={deck} key={deck.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default DecksList;
