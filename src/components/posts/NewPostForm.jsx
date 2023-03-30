import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../auth/firebase";
import Card from "../ui/Card";
import classes from "./NewPostForm.module.css";

const NewPostForm = (props) => {
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionRef = useRef();


  const [user, loading, error] = useAuthState(auth)

  const onSubmit = (event) => {
    event.preventDefault();
    const PostData = {
      user: user.uid,
      uname: user.email,
      title: titleInputRef.current.value,
      address: addressInputRef.current.value,
      image: imageInputRef.current.value,
      description: descriptionRef.current.value,
    };
    props.onAddPost(PostData);
  };

  return (

      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Post Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Post Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Post Description</label>
          <textarea
            id="description"
            rows="5"
            required
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add New Post</button>
        </div>
      </form>

  );
};

export default NewPostForm;
