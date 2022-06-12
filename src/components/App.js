import React from "react";
import "../styles/App.css";

const App = () => {
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
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="field">
            {/* <label>Email</label> */}
            <input id="email" type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
            {/* <label>Password</label> */}
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
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
