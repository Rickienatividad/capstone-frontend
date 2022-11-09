import axios from "axios";
import { useState } from "react";
import { NewEntry } from "./NewEntry";

export function Home() {
  const openIndex = () => {
    window.location.href = "/entryindex";
  };

  const handleCreateEntry = () => {
    window.location.href = "/newentry";
  };
  return (
    <div>
      <div>
        <button onClick={openIndex}>Recent Logs</button>
      </div>
      <div>
        <button onClick={handleCreateEntry}>New Entry </button>
      </div>
    </div>
  );
}
