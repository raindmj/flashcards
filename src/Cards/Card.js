import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Card({ card, handleDelete }) {
  // console.log(card)

  const { url } = useRouteMatch();
  // console.log(url, path)

  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="row mb-2">
          <p className="card-text col">{card.front}</p>
          <p className="card-text col">{card.back}</p>
        </div>
        <div className="float-right">
          <Link
            to={`${url}/cards/${card.id}/edit`}
            className="btn btn-secondary mr-2"
          >
            <span className="oi oi-pencil" /> Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(card)}
          >
            <span className="oi oi-trash" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
