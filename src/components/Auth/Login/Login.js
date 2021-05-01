import React, { useRef } from "react";

import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { signin } from "../../../actions/auth";
import { useHistory } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const loginHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!(email === "test@test.com" && password === "test")) return;

    dispatch(signin(email,password));

    history.push("/")
  };
  return (
    <div className={classes.login}>
      <h2>Login</h2>
      <form onSubmit={loginHandler}>
        <input
          ref={emailRef}
          defaultValue="test@test.com"
          type="text"
          name=""
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          defaultValue="test"
          type="password"
          name=""
          placeholder="Password"
        />
        <button>Login</button>

        <h6 style={{ fontSize: "14px", fontWeight: "lighter" }}>
          email: test@test.com <br /> password: test
        </h6>
      </form>
    </div>
  );
}
