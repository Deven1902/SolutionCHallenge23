import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import PostList from "../components/posts/PostList";

const FavouritesPage = () => {
  const style = {
    textAlign: "center",
  };
  const favouriteCtx = useContext(FavouritesContext);

  return (
    <div>
      <h1 style={style}>Best of your community is found here</h1>
      {favouriteCtx.totalfavourites !== 0 ? (
        <PostList posts={favouriteCtx.favourites.reverse()} />
      ) : (
        <p style={style}>Nothing here yet, add your favourites for easy access</p>
      )}
    </div>
  );
};

export default FavouritesPage;
