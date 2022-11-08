import axios from "axios";

export function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log("logged in.");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Email</div>
        <input type="email" />
        <div>Password</div>
        <input type="password" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
