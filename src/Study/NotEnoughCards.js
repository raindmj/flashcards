import React from "react";
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import AddCard from "../Cards/AddCard";

function NotEnoughCards({ currentDeck, deckId }) {
  const {url, path} = useRouteMatch();
  // console.log(url, path)

  return (
    <div>
      <h2>Not enough cards.</h2>
      <p>
        You need at least 3 cards to study. There are {currentDeck.cards.length}{" "}
        cards in this deck.
      </p>
      <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
      <span className="oi oi-plus" /> Add Cards
      </Link>
    </div>
  );
}

export default NotEnoughCards;
