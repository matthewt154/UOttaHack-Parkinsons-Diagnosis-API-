import React, { useState, useEffect, useContext } from "react";
import Context from "../context/Context";

const Login = props => {
  const context = useContext(Context);

  const login = async () => {
    const form = document.getElementById("login-form");
    // check fields
    const email = form["login-email"].value;
    const pass = form["login-pass"].value;

    context.login(email, pass).then(success => {
      if (success) {
        console.log(success);
        props.history.push("/user/dashboard");
        form.reset();
      } else {
        console.log(success);
        form.reset();
      }
    });
  };

  useEffect(() => {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", e => {
      e.preventDefault();
      login();
    });

    if (context.user) {
      props.history.push("/user/dashboard");
    }
  }, []);

  return (
    <React.Fragment>
      <span>Login page</span>
      <form id="login-form">
        <label htmlFor="login-email">Email</label>
        <input type="email" name="login-email" id="login-email" required />
        <label htmlFor="login-pass">Password</label>
        <input type="password" name="login-pass" id="login-pass" required />
        <button>Login</button>
      </form>
    </React.Fragment>
  );
};

export default Login;
