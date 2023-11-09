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
  // console.log(formData);

  function handleChange(event) {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const history = useHistory();

  async function handleSubmit(event) {
    //on submit, prevent page from reloading
    event.preventDefault();
    //make call to API with POST method to create a new deck with the form data
    await createDeck(formData);
    //fetch updated array of decks
    const updatedDecksList = await listDecks();
    //new deck added is the last in the array
    const newDeck = updatedDecksList[updatedDecksList.length - 1];
    const newDeckId = newDeck.id;
    // console.log(newDeckId)
    //redirect user to the deck page that matches the id of the new deck
    history.push(`/decks/${newDeckId}`);
  }

  function handleCancel() {
    history.push("/");
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
