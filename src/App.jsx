import { Route, Switch } from "react-router-dom";
import AllPostsPage from "./pages/AllPosts";
import NewPostPage from "./pages/NewPosts";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/MainNavigation";
import Login from './auth/Login';
import ProtectedRoute from "./components/protectedRoute";
import Dashboard from "./Dashboard";



const App = () => {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route exact path="/" component={ProtectedRoute}>
          <Route exact path="/" component={Dashboard} />
        </Route>
      </Switch>

      <Switch>
        <Route path="/dashboard" exact>
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