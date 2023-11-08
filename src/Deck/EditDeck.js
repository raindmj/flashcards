import React from "react";
import EditNav from "./DeckNav/EditNav";
import { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { readDeck, updateDeck, listDecks } from "../utils/api";
import DeckForm from "./DeckForm";

function EditDeck() {
  const params = useParams();
  // console.log(params);
  const deckId = params.deckId;

  useEffect(() => {
    async function getDeck() {
      const data = await readDeck(deckId);
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

  const [newDeckId, setNewDeckId] = useState("");

  useEffect(() => {
    async function getUpdatedDecks() {
      const updatedDecksList = await listDecks();
      const newDeck = updatedDecksList[updatedDecksList.length - 1];
      setNewDeckId(newDeck.id)
    }
    getUpdatedDecks();
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();

    await updateDeck(formData);

    history.push(`/decks/${newDeckId}`);
  }

  function handleCancel() {
    history.push(`/decks/${newDeckId}`);
  }

  if (deckId) {
    return (
      <div className="pb-4">
        <EditNav currentDeck={formData} deckId={deckId} />
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
