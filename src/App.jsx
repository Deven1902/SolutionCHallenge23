import { Route, Switch } from "react-router-dom";
import AllPostsPage from "./pages/AllPosts";
import NewPostPage from "./pages/NewPosts";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/MainNavigation";

const App = () => {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllPostsPage />
        </Route>
        <Route path="/new-post">
          <NewPostPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
