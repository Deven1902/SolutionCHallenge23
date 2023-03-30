import classes from "./PostItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
  const favouriteCtx = useContext(FavouritesContext);
  const isItemFavourite = favouriteCtx.isItemFavourite(post.id);
  const navigate = useNavigate()
  const toggleFavourite = () => {
    if (isItemFavourite) {
      swal({
        title: "Are you sure?",
        text: "Do you want to remove it from favourites ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          favouriteCtx.removeFavourite(post.id);
          console.log(`"${post.title}" has been removed`);
          swal("Item has been removed!", {
            icon: "success",
          });
        } else {
          swal("Not removed from Favourites");
        }
      });
    } else {
      favouriteCtx.addFavourite({
        id: post.id,
        title: post.title,
        address: post.address,
        image: post.image,
        description: post.description,
      });
      console.log(`"${post.title}" has been added`);
      swal({
        title: "Hooray",
        text: "Item has been added to favourites",
        icon: "success",
      });
    }
  };

  return (
    <Card>
      <li className={classes.item} >
        <div className="clickable" onClick={() => { navigate(`/post/${post.id}`, { state: post }) }}>
          <div className={classes.image}>
            <img src={post.image} alt={post.title} />
          </div>
          <div className={classes.content}>
            <p className="username">{post.uname}</p>
            <h3>{post.title}</h3>
            <address>{post.address}</address>
            <p style={{ overflow: "clip" }}>{post.description.split(/\s+/).slice(0, 30).join(" ")}...</p>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavourite}>
            {isItemFavourite ? "Remove from Fav" : "Add to Fav"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default PostItem;
