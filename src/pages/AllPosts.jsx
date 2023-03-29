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
        var meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        meetups = meetups.reverse();
        console.log(meetups);
        setLoadedPosts(meetups);
        setLoading(false);
      });
  };

  useEffect(fetchData, []);

  return (
    <>
      <div className={classes.mainQuote}>
        <div className={classes.quoteHeading}>
          Together <br></br>
          We can <br></br>
          Make it Happen <br></br>
        </div>

        <div className={classes.quoteSubheading}>
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
