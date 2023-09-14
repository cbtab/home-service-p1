import { useState } from "react";
import { useAuth } from "../contexts/authentication";
import axios from "axios";

const Login = () => {
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "loginIdentifier") {
      setLoginIdentifier(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      loginIdentifier,
      password,
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/auth/login`,
        data
      );
      console.log(response);
      if (response.data.message === "Login successful") {
        login(data);
      } else {
        console.log("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          type="text"
          id="loginIdentifier"
          name="loginIdentifier"
          value={loginIdentifier}
          onChange={handleChange}
          placeholder="Enter username or email"
          required
        />
        <label>password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter username or email"
          required
        />
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;
