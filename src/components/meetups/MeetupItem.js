import { useContext } from "react";
import FavoritesContext from "../../store/Favorites-context";
import MeetupItemCSS from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        address: props.address,
        title: props.title,
        description: props.description,
        image: props.image,
      });
    }
  }

  return (
    <li className={MeetupItemCSS.item}>
      <Card>
        <div className={MeetupItemCSS.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={MeetupItemCSS.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={MeetupItemCSS.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
