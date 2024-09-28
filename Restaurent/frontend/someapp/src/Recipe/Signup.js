import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const clickHandler = async () => {
    setNameError("");
    setEmailError("");
    setPasswordError("");

    if (!name) {
      setNameError("Please enter your name");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      setNameError("Name should only contain letters");
      return;
    }

    if (!email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      return;
    }

    if (!/(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}/.test(password)) {
      setPasswordError(
        "Password must contain special characters, digits, and at least one capital letter"
      );
      return;
    }

    const result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await result.json();
    console.log(response);
    localStorage.setItem("user1", JSON.stringify(response));
    navigate("/");
  };

  return (
    <div className="signup">
      <form style={{ padding: "2em" }} onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Mandeep Sallan"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <div className="error-message">{nameError}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="itsonlymandeep@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error-message">{emailError}</div>
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="M345@$hjk"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error-message">{passwordError}</div>
          <div className="form-text">
            Password must contain special characters, digits, and at least one capital letter.
          </div>
        </div>

        <button type="submit" className="btn signup-btn" onClick={clickHandler}>
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default Signup;