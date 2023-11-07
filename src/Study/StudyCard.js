import React from "react";
import { Route, Switch, Link } from "react-router-dom";

function StudyCard() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Testing</h5>
        <p className="card-text">Text</p>
        <Link to="#">Flip</Link>
      </div>
    </div>
  );
}

export default StudyCard;
