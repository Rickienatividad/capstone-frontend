export function Logs(props) {
  return (
    <div className="mt-5">
      <div className="logs-bg">
        <h1>All Logs</h1>
        {props.entries.map((entry) => (
          <div className="entries border-bottom border-3 pb-3" key={entry.id}>
            <h2>Date: {entry.date}</h2>
            <button
              className="btn btn-info"
              onClick={() => props.onSelectEntry(entry)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
      <a href="/newentry" className="btn btn-light new-button">
        New Entry
      </a>
    </div>
  );
}
