import PostList from "../components/posts/PostList";
import classes from "./AllPosts.module.css";
import { useRef, useState } from "react";
import { useEffect } from "react";

const AllPostsPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  const fetchData = () => {
    setLoading(true);
    fetch(
      "https://community-hub-4-default-rtdb.firebaseio.com/posts.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var posts = [];
        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          };
          posts.push(post);
        }
        posts = posts.reverse();
        console.log(posts);
        setLoadedPosts(posts);
        setLoading(false);
      });
  };

  useEffect(fetchData, []);

  return (
    <>
      <div className={classes.allposts}>
        <h1 style={{ paddingBottom: 24 }}>Check what's new in the commuity</h1>
        {!isLoading ? <PostList posts={loadedPosts} /> : <p>Loading...</p>}
      </div>
    </>
  );
};

export default AllPostsPage;
