import React from "react";
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { readDeck } from "../utils/api";
import StudyCard from "./StudyCard";
import NotEnoughCards from "./NotEnoughCards";
import StudyNav from "./StudyNav";

function Study() {
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
        <StudyNav deckId={deckId} currentDeck={currentDeck} />
        <div>
          <h1>Study: {currentDeck.name}</h1>
        </div>
        {currentDeck.cards.length < 3 ? <NotEnoughCards currentDeck={currentDeck} deckId={deckId} /> : <StudyCard currentDeck={currentDeck} /> }
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default Study;
