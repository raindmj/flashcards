import React from "react";
import {
    Route,
    Switch,
    Link,
    useParams,
    useRouteMatch,
  } from "react-router-dom";

function DeckNav({currentDeck}) {
  return (
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
  );
}

export default DeckNav;
