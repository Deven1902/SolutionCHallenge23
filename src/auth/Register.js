import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "./Register.css";
import google from '../icons/google.png'
import { Snackbar } from '@mui/material';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [visible, setVisible] = useState({
    visiblity: "visibility_off",
    type: "password"
  });

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const UseSnackbar = (message) => {
    setMessage(message);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }


  const register = () => {
    if (!name) UseSnackbar("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };



  useEffect(() => {
    if (loading) return;
    if (user) { navigate("/") };
  }, [user, loading]);
  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
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
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          <img src={google} /> Register with Google
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
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
export default Register;