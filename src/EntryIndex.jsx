import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { Logs } from "./Logs";
import { EntryShow } from "./EntryShow";

export function EntryIndex() {
  const [entries, setEntries] = useState([]);
  const [isEntryShowVisible, setIsEntryShowVisible] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({});

  const handleIndex = () => {
    axios
      .get("http://localhost:3000/entries.json")
      .then((response) => {
        console.log(response.data);
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
      <Logs entries={entries} onSelectEntry={handleShow} />
      <Modal show={isEntryShowVisible} onClose={hideShow}>
        <EntryShow entry={currentEntry} />
      </Modal>
    </div>
  );
}
