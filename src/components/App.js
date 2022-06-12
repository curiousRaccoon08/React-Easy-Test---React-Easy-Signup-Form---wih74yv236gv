import { useState } from "react";
import React from "react";
import "../styles/App.css";

const App = () => {
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    console.log(e.target);
    const { newName, value } = e.target;
    setFormValues({ ...formValues, [newName]: value });
    console.log(formValues);
  };
  return (
    <div className="container">
      <form>
        <h1>Login Form</h1>
        <div className="ui form">
          <div className="field">
            {/* <label>Name</label> */}
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              values={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            {/* <label>Email</label> */}
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              values={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            {/* <label>Password</label> */}
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              values={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            {/* <label>Password</label> */}
            <input id="consent" type="checkbox" name="consent" />
          </div>
          <button id="signup">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default App;
