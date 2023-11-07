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

function Deck() {
  const [currentDeck, setCurrentDeck] = useState({});

  // console.log(currentDeck);

  const params = useParams();
  //   console.log(params);
  const deckId = params.deckId;

  const { url, path } = useRouteMatch;
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
        <p>Deck here</p>
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default Deck;
