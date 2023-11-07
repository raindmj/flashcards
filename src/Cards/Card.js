import React from "react";
import { Link, useParams } from "react-router-dom";

function Card({ card }) {
  const params = useParams();
  console.log(params);

  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="row mb-2">
          <p className="card-text col">{card.front}</p>
          <p className="card-text col">{card.back}</p>
        </div>
        <div className="float-right">
          <Link to="/" className="btn btn-secondary mr-2">
            <span className="oi oi-pencil" /> Edit
          </Link>
          <button type="button" className="btn btn-danger">
            <span className="oi oi-trash" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
