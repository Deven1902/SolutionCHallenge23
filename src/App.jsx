import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<AllPostsPage />} />
        </Route>

        <Route path="/new-post" element={<ProtectedRoute />}>
          <Route path="/new-post" element={<NewPostPage />} />
        </Route>

        <Route path="/favourites" element={<ProtectedRoute />}>
          <Route path="/favourites" element={<FavouritesPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;