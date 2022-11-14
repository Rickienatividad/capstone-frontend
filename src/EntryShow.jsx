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
        window.location.reload();
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
      <div className="trip-deets">
        <h1 className="border-bottom border-info">Trip Details:</h1>
        <p>
          <span className="text-primary">{props.entry.date}</span>
        </p>
        <p>
          Location: <span className="text-primary">{props.entry.location}</span>
        </p>
        <p>
          Weather: <span className="text-primary">{props.entry.weather}</span>
        </p>
        <span className="notes-container">
          <p>
            Notes: <span className="text-primary">{props.entry.notes}</span>
          </p>
        </span>
      </div>
      <p className="bg-light">
        You caught{" "}
        <strong className="text-warning">{props.entry.fish.length} </strong>
        fish. Click <strong onClick={chartClick}>here</strong> for details.
      </p>
      <span style={{ display: isChartVisible ? "none" : "block" }}>
        <table className="mb-2">
          <thead>
            {/* <h5>Fish Caught:</h5> */}
            <tr>
              <th className="thth"> </th>
              <th className="firstrow th">Species</th>
              <th className="secondrow th">Length</th>
              <th className="thirdrow th">Weight</th>
            </tr>
          </thead>
          <tbody>
            {props.entry.fish.map((fish) => {
              return (
                // <div key={fish.id}>
                <tr className="table-row">
                  <th className="fish-icon">🐠</th>
                  <td className="firstdata">{fish.species}</td>
                  <td className="seconddata">{fish.length}</td>
                  <td className="thirddata">{fish.weight}</td>
                </tr>
                // </div>
              );
            })}
          </tbody>
        </table>
      </span>
      <div id="flex-entry-buttons" className="d-flex justify-content-evenly">
        <div>
          <button className="btn btn-danger btn-sm" onClick={handleDestroy}>
            Delete Entry
          </button>
        </div>
        <div>
          <button className="btn btn-info btn-sm" onClick={handleClick}>
            Edit Entry
          </button>
        </div>
        <div>
          <button className="btn btn-info btn-sm " onClick={fishClick}>
            Add a Fish
          </button>
        </div>
      </div>
      <div style={{ display: isVisible ? "none" : "block" }}>
        <form onSubmit={handleSubmit}>
          <h5>Update Entry</h5>
          <input
            type="hidden"
            defaultValue={props.entry.user_id}
            name="user_id"
          />
          <input type="date" name="date" defaultValue={props.entry.date} />
          <div>location</div>
          <input
            type="text"
            name="location"
            defaultValue={props.entry.location}
          />
          <div>weather</div>
          <input
            type="text"
            name="weather"
            defaultValue={props.entry.weather}
          />
          <div>notes</div>
          <textarea
            type="textarea"
            cols="25"
            rows="5"
            name="notes"
            defaultValue={props.entry.notes}
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>

      <div style={{ display: fishVisible ? "none" : "block" }}>
        <h5 className="fish-h5">Fish Details</h5>
        <form
          className="bg-warning"
          style={{ height: 350 }}
          onSubmit={handleFishSubmit}
        >
          {/* <div>entry_id</div> */}
          <input type="hidden" defaultValue={props.entry.id} name="entry_id" />
          {/* <div>user_id</div> */}
          <input
            type="hidden"
            defaultValue={props.entry.user_id}
            name="user_id"
          />
          <div className="pt-5">species:</div>
          <input type="text" name="species" />
          <div>length:</div>
          <input type="text" name="length" />
          <div>weight:</div>
          <input type="text" name="weight" />
          <div>
            <button className="btn btn-secondary mt-3" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
