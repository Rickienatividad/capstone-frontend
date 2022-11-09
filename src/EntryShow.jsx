import axios from "axios";

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

  return (
    <div>
      <h1>Entry Data</h1>
      <h2>{props.entry.date}</h2>
      <h3>{props.entry.location}</h3>
      <h3>{props.entry.weather}</h3>
      <h3>{props.entry.notes}</h3>
      {props.entry.fish.map((fish) => {
        return (
          <div key={fish.id}>
            <h4>{fish.species}</h4>
          </div>
        );
      })}

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
  );
}
