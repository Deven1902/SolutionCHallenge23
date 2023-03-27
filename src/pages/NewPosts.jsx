import NewPostForm from "../components/posts/NewPostForm";
import classes from "./NewPosts.module.css";
import { useHistory } from "react-router-dom";

const NewPostPage = () => {
  const history = useHistory();

  const onAddPost = (postData) => {
    fetch(
      "",
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
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
