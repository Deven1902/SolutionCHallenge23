import { useState } from "react";
import classes from "./MobileNavigation.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import { auth, logout } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const MobileNavigation = () => {
  const favouriteCtx = useContext(FavouritesContext);
  const [user, loading, error] = useAuthState(auth)
  const [toggle, setToggle] = useState("");
  function handleToggle() {
    if (toggle === "") {
      setToggle(classes.checked);
    } else {
      setToggle("");
    }
  }
  return (
    user ?
      <>
        <button className={classes.menu_button} onClick={handleToggle}>
          <span className={classes.hamburger}>
            <span
              className={`${classes.hamburger_inner} ${classes.first} ${toggle}`}
            ></span>
            <span
              className={`${classes.hamburger_inner} ${classes.second} ${toggle}`}
            ></span>
          </span>
        </button>

        <div className={`${classes.mobile_navigation} ${toggle}`}>
          <Link className={classes.mobile_link} onClick={handleToggle} to="/">
            All Posts
          </Link>
          <Link
            className={classes.mobile_link}
            onClick={handleToggle}
            to="/new/post"
          >
            New Post
          </Link>
          <Link
            className={classes.mobile_link}
            onClick={handleToggle}
            to="/favourites"
          >
            Favourites
            <span className={classes.mobile_badge}>
              {favouriteCtx.totalfavourites}
            </span>
          </Link>
          <Link
            className={classes.mobile_link}
            onClick={() => {
              logout()
              handleToggle()
            }}
            to="/"
          >
            Logout
          </Link>
        </div>
      </>
      :
      <></>
  );
};

export default MobileNavigation;
