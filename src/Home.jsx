export function Home() {
  const openIndex = () => {
    window.location.href = "/entryindex";
  };
  return (
    <div>
      <div>
        <button onClick={openIndex}>Recent Logs</button>
      </div>
      <div>
        <button>New Entry</button>
      </div>
    </div>
  );
}
