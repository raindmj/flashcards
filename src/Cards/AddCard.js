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
      //fetch current deck with matching deck id
      const data = await readDeck(deckId);
      //set the current deck to be the retrieved data (need this for the nav bar)
      setCurrentDeck(data);
    }
    getDeck();
  }, []);

  function handleChange(event) {
    //prevent page from reloading when input changes
    event.preventDefault();
    setFormData({
      //spread operator to get the previous form data
      ...formData,
      //update existing data (objects have unique key names, can't be duplicated)
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    //after clicking submit, prevent page from reloading
    event.preventDefault();
    //call on API with POST request and deckId + new card obj from form data to create new card
    await createCard(deckId, formData);
    //clear the form data after creating the card and submitting
    setFormData(initialFormData);
  }

  const history = useHistory();

  function handleCancel() {
    history.push(`/decks/${deckId}`);
  }

  const submitLabel = "Save";
  const cancelLabel = "Done";

  // console.log(formData);

  if (currentDeck.id) {
    return (
      <div className="pb-4">
        <AddCardNav currentDeck={currentDeck} deckId={deckId} />
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
  } else {
    return "Loading...";
  }
}

export default AddCard;
