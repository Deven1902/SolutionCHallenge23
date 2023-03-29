import { Link, useHistory } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MobileNavigation from "./MobileNavigation";
import { logout } from "../auth/firebase";
const MainNavigation = () => {
  const favouriteCtx = useContext(FavouritesContext);
  const location = useHistory();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>CH</div>

      <nav className={classes.desktop_navigation}>
        {
          localStorage.getItem("login") != true ?
            <></>
            :
            <ul>
              <li>
                <Link to="/dashboard">All Posts</Link>
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
              <li onClick={() => {
                logout();
                location.replace("/")
              }}>
                Logout
              </li>
            </ul>}
      </nav>
      <MobileNavigation />
    </header>
  );
};

export default MainNavigation;
