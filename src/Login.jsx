import axios from "axios";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}
export function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.jwt}`;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/home";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignup = () => {
    setIsSignupVisible(true);
  };

  const closeSignup = () => {
    setIsSignupVisible(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Email</div>
        <input type="email" name="email" />
        <div>Password</div>
        <input type="password" name="password" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>
        Not a member?{" "}
        <a href="#" onClick={handleSignup}>
          Sign Up
        </a>
      </p>
      <Modal show={isSignupVisible} onClose={closeSignup}>
        <Signup />
      </Modal>
    </div>
  );
}
