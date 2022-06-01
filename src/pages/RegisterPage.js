import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    contactPhone: "",
    contactEmail: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    if (newUser.password === confirmPassword) {
      document.getElementById("message").innerHTML = "";

      axios.post("http://localhost:5000/api/users", newUser).then(() => {
        console.log("new user added");
        setNewUser({
          firstName: "",
          lastName: "",
          contactPhone: "",
          contactEmail: "",
          password: "",
        });

        history.push("/login");
      });
    } else {
      document.getElementById("message").innerHTML =
        "**Password confirmation must be same as password";
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleConfPassChange = (e) => {
    e.preventDefault();
    if (e.target.value === newUser.password) {
      document.getElementById("message").innerHTML = "";
    }
    const newValue = e.target.value;
    setConfirmPassword(newValue);
  };

  const handlePhoneChange = (e) => {
    console.log(e.target.value.includes("2"));
    if (/^\d+$/.test(e.target.value)) {
      setNewUser({ ...newUser, contactPhone: e.target.value });
      document.getElementById("contactPhone").innerHTML = "";
    } else {
      document.getElementById("contactPhone").innerHTML =
        "Phone number must be number!";
    }
  };

  return (
    <div className="center">
      <h1 className="h1">Register</h1>
      <form onSubmit={submitForm}>
        <div className="txt_field">
          <input
            name="firstName"
            type="text"
            value={newUser.firstName}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>First name</label>
        </div>
        <div className="txt_field">
          <input
            name="lastName"
            type="text"
            value={newUser.lastName}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Last name</label>
        </div>
        <div className="txt_field">
          <input
            name="contactPhone"
            type="text"
            value={newUser.contactPhone}
            onChange={handlePhoneChange}
            required
          />
          <span id="contactPhone" style={{ color: "red" }}>
            {" "}
          </span>
          <label>Phone number</label>
        </div>
        <div className="txt_field">
          <input
            name="contactEmail"
            type="email"
            value={newUser.contactEmail}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input
            name="password"
            type="password"
            value={newUser.password}
            minLength={5}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => handleConfPassChange(e)}
            required
          />
          <span id="message" style={{ color: "red" }}>
            {" "}
          </span>
          <label>Confirm password</label>
        </div>
        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default RegisterPage;
