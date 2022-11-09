import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/users.json", params)
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>Name</div>
        <input type="text" name="name" />
        <div>Email</div>
        <input type="email" name="email" />
        <div>Password</div>
        <input type="password" name="password" />
        <div>Confirm Password</div>
        <input type="password" name="password_confirmation" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
