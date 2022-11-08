import { useState, useEffect } from "react";
import axios from "axios";

export function EntryIndex() {
  function Logs(props) {
    return (
      <div>
        <h1>All Logs</h1>
        {props.entries.map((entry) => (
          <div className="entries" key={entry.id}>
            <h3>{entry.date}</h3>
          </div>
        ))}
      </div>
    );
  }

  const [entries, setEntries] = useState([]);

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
  return (
    <div>
      {/* <button onClick={handleIndex}>Load Index</button> */}
      <Logs entries={entries} />
    </div>
  );
}
