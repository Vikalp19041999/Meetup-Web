import { Switch, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <AllMeetupsPage />
      </Route>
      <Route path="/new-meetups">
        <NewMeetupsPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </Switch>
  );
}

export default App;
