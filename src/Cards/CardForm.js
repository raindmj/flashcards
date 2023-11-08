import React from "react";

function DeckForm({ handleSubmit, handleChange, handleCancel, handleSave, formData, cancelLabel, submitLabel }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="front">Front:</label>
        <textarea
          id="front"
          name="front"
          type="text"
          onChange={handleChange}
          placeholder="Front side of card"
          value={formData.front}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back:</label>
        <textarea
          id="back"
          name="back"
          type="text"
          onChange={handleChange}
          placeholder="Back side of card"
          value={formData.back}
          className="form-control"
          required
        />
      </div>
      <button
        type="button"
        onClick={handleCancel}
        className="btn btn-secondary mr-2"
      >
        {cancelLabel}
      </button>
      <button type="submit" onClick={handleSave} className="btn btn-primary">{submitLabel}</button>
    </form>
  );
}

export default DeckForm;
