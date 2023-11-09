import React, { useState, useEffect } from "react";
import { Link, useParams, useRouteMatch, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api";
import DeckNav from "./DeckNav/index";
import Cards from "../Cards";
import { deleteDeck } from "../utils/api";

function Deck() {
  const [currentDeck, setCurrentDeck] = useState({});
  // console.log(currentDeck);

  const params = useParams();
  // console.log(params);
  const deckId = params.deckId;

  const { url } = useRouteMatch();
  // console.log(url, path)

  useEffect(() => {
    async function getDeck() {
      const data = await readDeck(deckId);
      setCurrentDeck(data);
    }
    getDeck();
  }, [deckId]);

  const history = useHistory();
  // console.log(history);

  async function handleDelete() {
    //if user clicks okay,
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      //make API call with DELETE method to delete the deck with matching deck id
      await deleteDeck(deckId);
      //after deleting, redirect to home page
      history.push("/");
    }
  }

  if (currentDeck.id) {
    return (
      <div>
        <DeckNav currentDeck={currentDeck} />

        <div className="pb-4">
          <h4>{currentDeck.name}</h4>
          <p>{currentDeck.description}</p>
          <Link to={`${url}/edit`} className="btn btn-secondary mr-2">
            <span className="oi oi-pencil" /> Edit
          </Link>
          <Link to={`${url}/study`} className="btn btn-primary mr-2">
            <span className="oi oi-book" /> Study
          </Link>
          <Link to={`${url}/cards/new`} className="btn btn-primary">
            <span className="oi oi-plus" /> Add Cards
          </Link>
          <button
            type="button"
            className="btn btn-danger float-right"
            onClick={handleDelete}
          >
            <span className="oi oi-trash" /> Delete
          </button>
        </div>

        <Cards currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} />
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default Deck;
