import { useContext } from "react";
import FavoritesContext from "../store/Favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);
  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>There are no favorite meetups for you. Start addding some!</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
