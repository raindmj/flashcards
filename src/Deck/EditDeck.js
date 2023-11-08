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
  // const [currentDeck, setCurrentDeck] = useState({});
  // console.log(currentDeck);

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

  // console.log(currentDeck)

  // const initialFormData = {
  //   name: `${currentDeck.name}`,
  //   description: `${currentDeck.description}`,
  // };

  const initialFormData = {
    name: "",
    description: "",
  };

  console.log(initialFormData)

  const [formData, setFormData] = useState(initialFormData);
  console.log(formData)

  function handleChange(event) {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // const history = useHistory();

  // const [updatedDecksList, setUpdatedDecksList] = useState([]);

  // console.log(updatedDecksList)

  // useEffect(() => {
  //   async function getUpdatedDecks() {
  //     const data = await listDecks();
  //     setUpdatedDecksList(data)
  //   }
  //   getUpdatedDecks();
  // }, [])

  // const newDeck = updatedDecksList[updatedDecksList.length - 1];
  // const newDeckId = newDeck.id;
  // // console.log(newDeckId)

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   await updateDeck(formData);

  //   history.push(`/decks/${newDeckId}`);
  // }

  // function handleCancel() {
  //   history.push(`/decks/${newDeckId}`);
  // }

  if (deckId) {
    return (
      <div>
        <EditNav currentDeck={formData} deckId={deckId} />
        <h1>Edit Deck</h1>
        <DeckForm
          handleChange={handleChange}
          // handleSubmit={handleSubmit}
          // handleCancel={handleCancel}
          formData={formData}
        />
      </div>
    );
  }
}

export default EditDeck;
