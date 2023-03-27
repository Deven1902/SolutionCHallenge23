import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalfavourites: 0,
  addFavourite: (favouriteMetup) => {},
  removeFavourite: (postId) => {},
  isItemFavourite: (postId) => {},
});

export const FavouritesContextProvider = (props) => {
  const [favouriteMetups, updateFavourite] = useState([]);

  const addFavouritehandler = (favouriteMetup) => {
    updateFavourite((prevFavourite) => {
      return prevFavourite.concat(favouriteMetup);
    });
  };

  const removeFavouriteHandler = (postId) => {
    updateFavourite((prevFavourite) => {
      return prevFavourite.filter((post) => post.id !== postId);
    });
  };

  const isItemFavouritehandler = (postId) => {
    return favouriteMetups.some((post) => post.id === postId);
  };

  const context = {
    favourites: favouriteMetups,
    totalfavourites: favouriteMetups.length,
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
