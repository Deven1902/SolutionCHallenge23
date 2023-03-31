import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPostsPage from "./pages/AllPosts";
import NewPostPage from "./pages/NewPosts";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/MainNavigation";
import ProtectedRoute from "./components/protectedRoute";
import Register from "./auth/Register";
import Reset from "./auth/Reset";
import PostPage from "./pages/PostPage";



const App = () => {
  
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<AllPostsPage />} />
        </Route>

        <Route path="/new/post" element={<ProtectedRoute />}>
          <Route path="/new/post" element={<NewPostPage />} />
        </Route>

        <Route path="/favourites" element={<ProtectedRoute />}>
          <Route path="/favourites" element={<FavouritesPage />} />
        </Route>

        <Route path="/post/:id" element={<ProtectedRoute />}>
          <Route path="/post/:id" element={<PostPage />} />
        </Route>

        <Route path="/register" element={<ProtectedRoute reverse={true} />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/reset" element={<ProtectedRoute reverse={true} />}>
          <Route path="/reset" element={<Reset />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;