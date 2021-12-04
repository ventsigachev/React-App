import "./Create.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import moment from "moment";
import { userContext } from "../../auth/Authentication";
import { useContext } from "react";


const API_URL = "http://localhost:3030/data";

const Create = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);
  const userData = useContext(userContext)[0];

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const authorName = userData.username;
    const authorId = userData._id;
    const authorAvatar = userData.avatar;
    const likes = 0;
    const dislikes = 0;
    const date = moment().format("DD-MM-YYYY HH:mm");

    const story = { title, about, date, description, authorName, authorId, authorAvatar, likes, dislikes };

    setIsPending(true);

    fetch(`${API_URL}/stories`, {

        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-Authorization" : userData.accessToken },
        
        body: JSON.stringify(story)

    })
    .then(() => {
        setIsPending(false);
        navigate("/home");
    })
  }

  return (
    <form onSubmit={submitHandler} method="POST">
      <label htmlFor="title">Your Story Title</label>
      <input
      className="contactInput"
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        autoFocus={true}
      />
      <label htmlFor="about">Your Story About</label>
      <input
      className="contactInput"
        type="text"
        name="about"
        id="about"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        required
      />
      <label htmlFor="description">Your Story</label>
      <textarea
      className="contactInput"
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write your Story Here..."
        required
      />
      {!isPending && <input type="submit" id="submit" value="Publish" />}
      {isPending && <input type="submit" id="submit" value="Publishing...." disabled/>}
    </form>
  );
};

export default Create;
