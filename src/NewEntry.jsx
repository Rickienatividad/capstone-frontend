export function NewEntry() {
  const userId = localStorage.getItem("userId");
  return (
    <div>
      <h2>Entry Details</h2>
      <form action="">
        <div>user id</div>
        <input type="text" defaultValue={userId} />
        <div>location</div>
        <input type="text" />
        <div>weather</div>
        <input type="text" />
        <div>notes</div>
        <input type="textarea" cols="10" rows="20" />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
