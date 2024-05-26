import React from "react";
import classes from "../Auth/SignUp.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import { useState } from "react";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(password, email);
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_ldxPi1REW1owL8-himdNegkMklhAeEAhkEkfG02zQ&s"
          alt=""
        />
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button className={classes.login_signInButton}>Sign In</button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create account between */}
        <button className={classes.login_registerButton}>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
