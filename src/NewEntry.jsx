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
        window.location.href = "/entryindex";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };
  return (
    <div className="new-entry-bg">
      <div className="mt-5">
        <h2 className="mb-3 pt-5">Entry Details</h2>
        <form onSubmit={handleSubmit}>
          {/* <div>user id</div> */}
          <input type="hidden" defaultValue={userId} name="user_id" />
          <div>date</div>
          <input className="mb-2" type="date" name="date" />
          <div>location</div>
          <input className="mb-2" type="text" name="location" />
          <div>weather</div>
          {/* <input type="text" name="weather" /> */}
          <input type="radio" id="hot" name="weather" value="hot" />
          <label htmlFor="hot">Hot</label>
          <input type="radio" id="cold" name="weather" value="cold" />
          <label htmlFor="cold">Cold</label>
          <input type="radio" id="mild" name="weather" value="mild" />
          <label htmlFor="mild">Mild</label>

          <div className="mt-3">notes</div>
          <textarea type="textarea" cols="25" rows="10" name="notes" />
          <div>
            <button className="btn btn-primary mt-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
