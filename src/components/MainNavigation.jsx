import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import NavbarImg from './NavbarImg.png';
import MobileNavigation from "./MobileNavigation";
import { auth, logout } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const MainNavigation = () => {
  const favouriteCtx = useContext(FavouritesContext);
  const [user, loading, error] = useAuthState(auth)
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={NavbarImg} alt="Logo" style={{ height: 100, padding: "10px" }} />
        <div>CH</div>
      </div>

      <nav className={classes.desktop_navigation}>
        {
          user ?
            <ul>
              <li>
                <Link to="/">All Posts</Link>
              </li>
              <li>
                <Link to="/new-post">New Posts</Link>
              </li>
              <li>
                <Link to="/favourites">
                  Favourites
                  <span className={classes.badge}>
                    {favouriteCtx.totalfavourites}
                  </span>
                </Link>
              </li>
              <Link to="/">
                <li onClick={() => {
                  logout();
                }}
                  style={{ color: 'white', fontSize: 18, fontWeight: 'normal' }}
                >
                  Logout
                </li>
              </Link>
            </ul>
            :
            <></>
        }
      </nav>
      <MobileNavigation />
    </header >
  );
};

export default MainNavigation;
