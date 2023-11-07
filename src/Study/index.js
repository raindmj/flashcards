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
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{currentDeck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <div>
          <h1>Study: {currentDeck.name}</h1>
        </div>
        {currentDeck.cards.length < 3 ? <NotEnoughCards currentDeck={currentDeck} /> : <StudyCard currentDeck={currentDeck} /> }
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default Study;
