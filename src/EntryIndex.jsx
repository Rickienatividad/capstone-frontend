import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { Logs } from "./Logs";

export function EntryIndex() {
  const [entries, setEntries] = useState([]);
  const [isEntryShowVisible, setIsEntryShowVisible] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({});

  const handleIndex = () => {
    axios
      .get("http://localhost:3000/entries.json")
      .then((response) => {
        setEntries(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  useEffect(handleIndex, []);

  const handleShow = (entry) => {
    setIsEntryShowVisible(true);
    setCurrentEntry(entry);
  };

  const hideShow = () => {
    setIsEntryShowVisible(false);
  };

  return (
    <div>
      {/* <button onClick={handleIndex}>Load Index</button> */}
      <Logs entries={entries} onSelectEntry={handleShow} />
      <Modal show={isEntryShowVisible} onClose={hideShow}>
        <h3>{currentEntry.location}</h3>
        <h4>{currentEntry.weather}</h4>
        <p>{currentEntry.lure}</p>
        <p>{currentEntry.notes}</p>
      </Modal>
    </div>
  );
}
