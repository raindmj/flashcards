import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { readDeck } from "../utils/api";

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
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {currentDeck.name}
            </li>
          </ol>
        </nav>
        <p>Deck here</p>
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default Deck;
