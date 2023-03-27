import classes from "./PostList.module.css";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <ul className={classes.list}>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </ul>
  );
};

export default PostList;
