import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { readDeck } from "../utils/api";
import DeckNav from "./DeckNav";
import Cards from "../Cards";

function Deck() {
  const [currentDeck, setCurrentDeck] = useState({});

  // console.log(currentDeck);

  const params = useParams();
  console.log(params);
  const deckId = params.deckId;

  const { url, path } = useRouteMatch();
  // console.log(url, path)

  useEffect(() => {
    async function getDeck() {
      const data = await readDeck(deckId);
      setCurrentDeck(data);
    }
    getDeck();
  }, [deckId]);

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
          <button type="button" className="btn btn-danger float-right">
            <span className="oi oi-trash" /> Delete
          </button>
        </div>

        <Cards currentDeck={currentDeck} />
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default Deck;
