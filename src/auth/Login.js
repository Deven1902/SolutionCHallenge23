import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import google from "../icons/google.png"
import { Snackbar } from "@mui/material";
import classes from "../pages/AllPosts.module.css"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const UseSnackBar = (message) => {
    setMessage(message);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }


  const [visible, setVisible] = useState({
    visiblity: "visibility_off",
    type: "password"
  });

  useEffect(() => {
    if (user) window.location.reload();
  }, [user, loading]);

  return (
    loading ? <div>Loading...</div>
      :

      <div className="login">

        <div className={classes.mainQuote}>
          <div className={classes.quoteHeading}>
            Together we can <br />
            Make it Happen <br />
          </div>

          <div className={classes.quoteSubheading}>
            Connecting Communities across the world!!!
          </div>
        </div>








        <div className="login__container">
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <div className="passwdbox">
            <input
              type={visible.type}
              className="passwd__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span className="material-symbols-outlined" onClick={() => {
              if (visible.type === "password") {
                setVisible({
                  type: "text",
                  visiblity: "visibility"
                })
              }
              else {
                setVisible({
                  type: "password",
                  visiblity: "visibility_off"
                })
              }
            }}>
              {visible.visiblity}
            </span>
          </div>
          <button
            className="login__btn"
            onClick={async () => {
              const response = await logInWithEmailAndPassword(email, password)
              UseSnackBar(response)
            }}
          >
            Login
          </button>
          <button className="login__btn login__google" onClick={signInWithGoogle}>
            <img src={google} />Login with Google
          </button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={open}
          onClose={setOpen}
          message={message}
        />
      </div>
  );
}
export default Login;