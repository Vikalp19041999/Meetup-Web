import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/Favorites-context";
import NavigationCSS from "./MainNavigation.module.css";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <header className={NavigationCSS.header}>
      <div className={NavigationCSS.logo}>Meetup Web</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add new Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={NavigationCSS.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
