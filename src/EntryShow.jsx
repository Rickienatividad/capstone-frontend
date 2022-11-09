export function EntryShow(props) {
  return (
    <div>
      <h1>Entry Data</h1>
      <h2>{props.entry.date}</h2>
      <h3>{props.entry.location}</h3>
      <h3>{props.entry.weather}</h3>
      <h3>{props.entry.notes}</h3>
    </div>
  );
}
