import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LatestEntry } from "./LatestEntry";

export function NewEntry() {
  const userId = localStorage.getItem("userId");

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/entries.json", params)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/lastentry";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };
  return (
    <div>
      <h2>Entry Details</h2>
      <form onSubmit={handleSubmit}>
        {/* <div>user id</div> */}
        <input type="hidden" defaultValue={userId} name="user_id" />
        <div>date</div>
        <input type="date" name="date" />
        <div>location</div>
        <input type="text" name="location" />
        <div>weather</div>
        <input type="text" name="weather" />
        <div>notes</div>
        <textarea type="textarea" cols="25" rows="10" name="notes" />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
