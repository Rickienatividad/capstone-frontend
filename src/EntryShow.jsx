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

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible((current) => !current);
  };

  ////////////////////////Fish
  const [fishVisible, setFishVisible] = useState(true);
  const fishClick = () => {
    setFishVisible((current) => !current);
  };

  const handleFishSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    axios.post("http://localhost:3000/fishes.json", params).then((response) => {
      console.log(response.data);
      window.location.href = "/entryindex";
    });
  };

  ////////////////////Chart
  const [isChartVisible, setIsChartVisible] = useState(true);
  const chartClick = () => {
    setIsChartVisible((current) => !current);
  };

  return (
    <div>
      <h1>Entry Data</h1>
      <h2>{props.entry.date}</h2>
      <h3>{props.entry.location}</h3>
      <h3>{props.entry.weather}</h3>
      <h3>{props.entry.notes}</h3>
      <p>
        Caught <strong onClick={chartClick}>{props.entry.fish.length} </strong>
        🐠
      </p>
      {/* <h4>Fish Caught:</h4> */}
      {/* {isFishVisible && (
        <div className="bg-light">
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
        </div>
      )} */}

      <span style={{ display: isChartVisible ? "none" : "block" }}>
        <table>
          <thead>
            <h5>Fish Caught:</h5>
            <tr>
              <th className="firstrow th">Species</th>
              <th className="secondrow th">Length</th>
              <th className="thirdrow th">Weight</th>
            </tr>
          </thead>
          <tbody>
            {props.entry.fish.map((fish) => {
              return (
                <div key={fish.id}>
                  <tr>
                    <th className="fish-icon">🐠</th>
                    <td className="firstdata">{fish.species}</td>
                    <td className="seconddata">{fish.length}</td>
                    <td className="thirddata">{fish.weight}</td>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </table>
      </span>

      <div>
        <button className="mt-2" onClick={handleDestroy}>
          Delete Entry
        </button>
      </div>
      <div>
        <button onClick={handleClick}>Edit Entry</button>
      </div>
      <div>
        <button onClick={fishClick}>Add a Fish</button>
      </div>
      <div style={{ display: isVisible ? "none" : "block" }}>
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
          <textarea type="textarea" cols="25" rows="5" name="notes" />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>

      <div style={{ display: fishVisible ? "none" : "block" }}>
        <h5>Fish Details</h5>
        <form onSubmit={handleFishSubmit}>
          {/* <div>entry_id</div> */}
          <input type="hidden" defaultValue={props.entry.id} name="entry_id" />
          {/* <div>user_id</div> */}
          <input
            type="hidden"
            defaultValue={props.entry.user_id}
            name="user_id"
          />
          <div>species:</div>
          <input type="text" name="species" />
          <div>length:</div>
          <input type="text" name="length" />
          <div>weight:</div>
          <input type="text" name="weight" />
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
