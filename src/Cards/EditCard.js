import React, { useState, useEffect } from "react";
import { readCard, readDeck, updateCard } from "../utils/api";
import { useHistory, useParams } from "react-router-dom";
import EditCardNav from "./CardsNav/EditCardNav";
import CardForm from "./CardForm";

function EditCard() {
  const [currentDeck, setCurrentDeck] = useState({});

  const initialFormData = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const { deckId, cardId } = useParams();
  // console.log(deckId, cardId)

  useEffect(() => {
    async function getCard() {
      const deckData = await readDeck(deckId);
      setCurrentDeck(deckData);
      const cardData = await readCard(cardId);
      setFormData(cardData);
    }
    getCard();
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
    await updateCard(formData);
    history.push(`/decks/${deckId}`);
  }

  function handleCancel() {
    history.push(`/decks/${deckId}`);
  }

  const submitLabel = "Submit";
  const cancelLabel = "Cancel";

  // console.log(formData);

  if (currentDeck.id) {
    return (
      <div className="pb-4">
        <EditCardNav
          currentDeck={currentDeck}
          cardId={cardId}
          deckId={deckId}
        />
        <h2>Edit Card</h2>
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
  } else {
    return "Loading...";
  }
}

export default EditCard;
