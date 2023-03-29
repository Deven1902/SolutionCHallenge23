import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "./firebase";
import "./Reset.css";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();



  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const useSnackBar = (message) => {
    setMessage(message);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }

  useEffect(() => {
    if (loading) return;
    if (user) { navigate("/") };
  }, [user, loading]);



  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => {
            if (sendPasswordResetEmail(email)) {
              useSnackBar("Password reset link sent!");
            }
            else {
              useSnackBar("Error");
            }
          }}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={setOpen(false)}
        message={message}
      />
    </div>
  );
}
export default Reset;