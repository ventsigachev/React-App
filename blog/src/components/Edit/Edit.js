import "./Edit.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { userContext } from "../../auth/Authentication";
import { useContext } from "react";
import { componentGuard } from "../../auth/componentGuard";

const API_URL = "http://localhost:3030/data";

const Edit = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);
  const userData = useContext(userContext)[0];

  useEffect(() => {
    const getStory = async () => {
      const res = await fetch(`${API_URL}/stories/${storyId}`);
      const data = await res.json();
      setTitle(data.title);
      setAbout(data.about);
      setDescription(data.description);
    };

    getStory();
  }, [storyId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const authorName = userData.username;
    const authorId = userData._id;
    const authorAvatar = userData.avatar;
    const likes = [];
    const dislikes = [];
    const date = moment().format("DD-MM-YYYY HH:mm");
    const _id = storyId;
    const _ownerId = authorId;

    const story = {
      _ownerId,
      _id,
      title,
      about,
      authorName,
      authorId,
      authorAvatar,
      date,
      description,
      likes,
      dislikes,
    };
    
    setIsPending(true);

    fetch(`${API_URL}/stories/${storyId}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        "X-Authorization" : userData.accessToken },
      body: JSON.stringify(story),
    }).then(() => {
      setIsPending(false);
      navigate("/home");
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Your Story Title</label>
      <input
        className="contactInput"
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        autoFocus
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
        className="contactInput textarea"
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      {!isPending && <input type="submit" id="submit" value="Update" />}
      {isPending && (
        <input type="submit" id="submit" value="Updating...." disabled />
      )}
    </form>
  );
};

export default componentGuard(Edit);
