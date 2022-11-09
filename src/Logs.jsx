export function Logs(props) {
  return (
    <div>
      <h1>All Logs</h1>
      {props.entries.map((entry) => (
        <div className="entries" key={entry.id}>
          <h2>{entry.date}</h2>
          <button onClick={() => props.onSelectEntry(entry)}>Details</button>
        </div>
      ))}
    </div>
  );
}
