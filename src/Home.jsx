export function Home() {
  const handleIndex = () => {
    window.location.href = "/entryindex";
  };
  return (
    <div>
      <div>
        <button onClick={handleIndex}>Recent Logs</button>
      </div>
      <div>
        <button>New Entry</button>
      </div>
    </div>
  );
}
