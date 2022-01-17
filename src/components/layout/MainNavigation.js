import { Link } from "react-router-dom";
import NavigationCSS from "./MainNavigation.module.css";

function MainNavigation() {
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
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
