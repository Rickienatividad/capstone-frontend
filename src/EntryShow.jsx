import axios from "axios";
import { useState } from "react";

export function EntryShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    axios
      .patch(
        "http://localhost:3000/entries/" + props.entry.id + ".json",
        params
      )
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  const handleDestroy = () => {
    axios.delete("http://localhost:3000/entries/" + props.entry.id);
    window.location.href = "/entryindex";
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((current) => !current);
  };

  return (
    <div>
      <h1>Entry Data</h1>
      <h2>{props.entry.date}</h2>
      <h3>{props.entry.location}</h3>
      <h3>{props.entry.weather}</h3>
      <h3>{props.entry.notes}</h3>
      <h4>Fish Caught:</h4>
      {props.entry.fish.map((fish) => {
        return (
          <div key={fish.id}>
            <ul>
              <li>
                <h4>{fish.species}</h4>
              </li>
            </ul>
          </div>
        );
      })}
      <div>
        <button onClick={handleDestroy}>Delete Entry</button>
      </div>
      <div>
        <button onClick={handleClick}>Edit Entry</button>
      </div>
      <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
        <form onSubmit={handleSubmit}>
          <h5>Update Entry</h5>
          <input
            type="hidden"
            defaultValue={props.entry.user_id}
            name="user_id"
          />
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
    </div>
  );
}
