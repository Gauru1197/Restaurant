import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminSignup.css'

function AdminSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await fetch("http://localhost:5000/admin/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      navigate("/admin/login"); // Redirect to admin login page
    } else {
      // Handle error
    }
  };

  return (
    <div className="signup-container">
      <h2>Admin Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signup-btn" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
}

export default AdminSignup;
