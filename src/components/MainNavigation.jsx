import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import NavbarImg from './NavbarImg.png';
import MobileNavigation from "./MobileNavigation";
import { logout } from "../auth/firebase";
const MainNavigation = () => {
  const favouriteCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
     <div className={classes.logo}>
        <img src={NavbarImg} alt="Logo"  />
        <div>CH</div>
      </div>

      <nav className={classes.desktop_navigation}>
        {
          localStorage.getItem("login") === 'true' ?
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
              <li onClick={() => {
                logout();
                window.location.href = "/";
              }}>
                Logout
              </li>
            </ul>
            :
            <></>
        }
      </nav>
      <MobileNavigation />
    </header>
  );
};

export default MainNavigation;
