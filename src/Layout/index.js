import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home";
import { useState } from "react";
import { useEffect } from "react";
import { listDecks } from "../utils/api";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchAllDecks() {
      const data = await listDecks();
      setDecks(data);
    }
    fetchAllDecks();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Home />
        <NotFound />
      </div>
    </React.Fragment>
  );
}

export default Layout;
