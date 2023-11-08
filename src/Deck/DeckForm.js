import React from "react";
import { Link } from "react-router-dom";

function DeckForm({ handleSubmit, handleChange, handleCancel, formData }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Deck Name"
          value={formData.name}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          placeholder="Brief description of the deck"
          value={formData.description}
          className="form-control"
        />
      </div>
      <button
        type="button"
        onClick={handleCancel}
        className="btn btn-secondary mr-2"
      >
        Cancel
      </button>
      <input type="submit" className="btn btn-primary" />
    </form>
  );
}

export default DeckForm;
