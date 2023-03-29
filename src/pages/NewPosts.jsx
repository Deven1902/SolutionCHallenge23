import NewPostForm from "../components/posts/NewPostForm";
import classes from "./NewPosts.module.css";
import { useNavigate } from "react-router-dom";

const NewPostPage = () => {
  const navigate = useNavigate();

  const onAddPost = (postData) => {
    fetch(
      "https://community-hub-4-default-rtdb.firebaseio.com/posts.json",
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
  };
  return (
    <div className={classes.container}>
      <h2>Add New Post</h2>
      <NewPostForm onAddPost={onAddPost} />
    </div>
  );
};

export default NewPostPage;
