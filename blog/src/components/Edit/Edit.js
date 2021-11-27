import "./Edit.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const API_URL = "http://localhost:3030/jsonstore";

const Edit = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();

  const [story, setStory] = useState({});
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState();
  const [description, setDescription] = useState();
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getStory = async () => {
      const res = await fetch(`${API_URL}/story/${storyId}`);
      const data = await res.json();
      setStory(data);
      setTitle(data.title);
      setAbout(data.about);
      setDescription(data.description);
    };

    getStory();
  }, [storyId]);

  const submitHandler = (e) => {
    e.preventDefault();
    const author = "ven";
    const likes = 0;
    const dislikes = 0;
    const date = moment().format("DD-MM-YYYY HH:mm");
    const _id = storyId;

    const story = {
      _id,
      title,
      about,
      author,
      date,
      description,
      likes,
      dislikes,
    };

    setIsPending(true);

    fetch(`${API_URL}/story/${storyId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
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
        className="edit-text"
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
        className="edit-text"
        type="text"
        name="about"
        id="about"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        required
      />
      <label htmlFor="description">Your Story</label>
      <textarea
        className="edit-text textarea"
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write your Story Here..."
        required
      />
      {!isPending && <input type="submit" id="submit" value="Update" />}
      {isPending && (
        <input type="submit" id="submit" value="Updating...." disabled />
      )}
    </form>
  );
};

export default Edit;
