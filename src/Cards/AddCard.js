import React, { useState, useEffect } from "react";
import CardForm from "./CardForm";
import AddCardNav from "./CardsNav/AddCardNav";
import { readDeck, createCard } from "../utils/api";
import { useHistory, useParams } from "react-router-dom";

function AddCard() {
  const [currentDeck, setCurrentDeck] = useState({});

  const initialFormData = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const { deckId } = useParams();
  //   console.log(deckId)

  useEffect(() => {
    async function getDeck() {
      const data = await readDeck(deckId);
      setCurrentDeck(data);
    }
    getDeck();
  }, []);

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

    await createCard(deckId, formData);

    setFormData(initialFormData);
  }

  function handleCancel() {
    history.push(`/decks/${deckId}`);
  }

  const submitLabel = "Save";
  const cancelLabel = "Done";

  console.log(formData)

  return (
    <div className="pb-4">
      <AddCardNav currentDeck={currentDeck} />
      <h2>Add Card</h2>
      <CardForm
        submitLabel={submitLabel}
        cancelLabel={cancelLabel}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        formData={formData}
      />
    </div>
  );
}

export default AddCard;
