import React from "react";
import EditNav from "./DeckNav/EditNav";
import { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { readDeck } from "../utils/api";

function EditDeck() {
  const [currentDeck, setCurrentDeck] = useState({});

  const params = useParams();
  // console.log(params);
  const deckId = params.deckId;

  useEffect(() => {
    async function getDeck() {
      const data = await readDeck(deckId);
      setCurrentDeck(data);
    }
    getDeck();
  }, [deckId]);

  if (deckId) {
    return (
      <div>
        <EditNav currentDeck={currentDeck} deckId={deckId} />
        <h1>Edit Deck</h1>
      </div>
    );
  }
}

export default EditDeck;
