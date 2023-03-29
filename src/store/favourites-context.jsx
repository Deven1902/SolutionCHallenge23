import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalfavourites: 0,
  addFavourite: (favouritePost) => {},
  removeFavourite: (postId) => {},
  isItemFavourite: (postId) => {},
});

export const FavouritesContextProvider = (props) => {
  const [favouritePosts, updateFavourite] = useState([]);

  const addFavouritehandler = (favouritePost) => {
    updateFavourite((prevFavourite) => {
      return prevFavourite.concat(favouritePost);
    });
  };

  const removeFavouriteHandler = (postId) => {
    updateFavourite((prevFavourite) => {
      return prevFavourite.filter((post) => post.id !== postId);
    });
  };

  const isItemFavouritehandler = (postId) => {
    return favouritePosts.some((post) => post.id === postId);
  };

  const context = {
    favourites: favouritePosts,
    totalfavourites: favouritePosts.length,
    addFavourite: addFavouritehandler,
    removeFavourite: removeFavouriteHandler,
    isItemFavourite: isItemFavouritehandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
