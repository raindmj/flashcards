import React from "react";
import CreateNav from "./DeckNav/CreateNav";
import DeckForm from "./DeckForm";
import { useState } from "react";
import { createDeck, listDecks } from "../utils/api";
import { useHistory } from "react-router-dom";

function CreateDeck() {
  const initialFormData = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  console.log(formData);

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

    await createDeck(formData);

    const updatedDecksList = await listDecks();
    const newDeck = updatedDecksList[updatedDecksList.length - 1];
    const newDeckId = newDeck.id;
    // console.log(newDeckId)

    history.push(`/decks/${newDeckId}`);
  }

  function handleCancel() {
    history.push("/")
  }

  return (
    <div className="pb-4">
      <CreateNav />
      <h1>Create Deck</h1>
      <DeckForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        formData={formData}
      />
    </div>
  );
}

export default CreateDeck;
