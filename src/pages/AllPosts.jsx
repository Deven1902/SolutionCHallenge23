import PostList from "../components/posts/PostList";
import classes from "./AllPosts.module.css";
import { useState } from "react";
import { useEffect } from "react";

const AllPostsPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  const fetchData = () => {
    setLoading(true);
    fetch(
      ""
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
      <div classname={classes.mainQuote}>
          <h1 >
            Together <br></br>
            We can <br></br>
            Make it Happen <br></br>
          </h1>

          <div>
            Connecting Communities across the world!!!
          </div>
      </div>

      <div className={classes.allposts}>
        <h1>Check What's new in the commuity</h1>
        {!isLoading ? <PostList posts={loadedPosts} /> : <p>Loading...</p>}
    </div>
    </>
  );
};

export default AllPostsPage;
