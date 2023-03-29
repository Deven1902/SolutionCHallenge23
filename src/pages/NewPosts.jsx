import NewPostForm from "../components/posts/NewPostForm";
import classes from "./NewPosts.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";

const NewPostPage = () => {
  const navigate = useNavigate();

  const onAddPost = (postData) => {

    auth.currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
      fetch(
        `https://community-hub-4-default-rtdb.firebaseio.com/posts.json?auth=${idToken}`,
        {
          method: "POST",
          body: JSON.stringify(postData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        navigate("/");
      });
    }).catch(function (error) {
      // Handle error
    });


  };
  return (
    <div className={classes.container}>
      <h2>Add New Post</h2>
      <NewPostForm onAddPost={onAddPost} />
    </div>
  );
};

export default NewPostPage;
