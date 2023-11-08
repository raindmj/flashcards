import React from "react";
import EditNav from "./DeckNav/EditNav";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, updateDeck, listDecks } from "../utils/api";
import DeckForm from "./DeckForm";

function EditDeck() {
  const [currentDeck, setCurrentDeck] = useState({});

  const params = useParams();
  // console.log(params);
  const deckId = params.deckId;

  useEffect(() => {
    async function getDeck() {
      const data = await readDeck(deckId);
      setCurrentDeck(data);
      setFormData(data);
    }
    getDeck();
  }, [deckId]);

  const initialFormData = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  // console.log(formData)

  function handleChange(event) {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    await updateDeck(formData);
    history.push(`/decks/${deckId}`);
  }

  function handleCancel() {
    history.push(`/decks/${deckId}`);
  }

  if (deckId) {
    return (
      <div className="pb-4">
        <EditNav currentDeck={currentDeck} deckId={deckId} />
        <h1>Edit Deck</h1>
        <DeckForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          formData={formData}
        />
      </div>
    );
  }
}

export default EditDeck;
