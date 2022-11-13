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
      <div className="home-bg mt-5">
        <h2 className="home-h2">Ruby on Reels</h2>
        <div className="home-btns-container">
          <div className="home-btns">
            <div>
              <button className="btn btn-light" onClick={openIndex}>
                Recent Logs
              </button>
            </div>
            <div>
              <button className="btn btn-light" onClick={handleCreateEntry}>
                New Entry{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
