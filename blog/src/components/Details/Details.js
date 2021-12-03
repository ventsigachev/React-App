import "./Details.css";

import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { userContext } from "../../auth/Authentication";
import { useContext } from "react";

const API_URL = "http://localhost:3030/data";

const Details = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const user = useContext(userContext)[0]; 
  const [story, setStory] = useState({});

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0)

  const isAuthor = story.authorId === user._id ? true : false;

  useEffect(() => {
    fetch(`${API_URL}/story/${storyId}`)
      .then((res) => res.json())
      .then((data) => setStory(data));
  }, [storyId]);

  const deleteHandler = () => {

    fetch(`${API_URL}/story/${storyId}`, {
      method: 'DELETE'
    })
    .then(() => {
        navigate("/home")
    })

  }

  return (
    <>
      <article className="content-section">
        <img src={story.authorAvatar} alt="img" height="55" width="55" />
        <div className="media-body">
          <div className="article-metadata">
            <p>{story.authorName}</p>
            <small className="text-muted">{story.date}</small>
          </div>
          <h2 className="article-title">{story.title}</h2>
          <p className="article-content">{story.about}</p>
        </div>
        <div className="article-description">
          <h3>{story.description}</h3>
        </div>
        {!isAuthor && <section className="details-likes-dislikes">
            <p onClick={() => setLikes(prevLikes => prevLikes + 1)}>Likes: {likes}</p>
            <p onClick={() => setDislikes(prevDislikes => prevDislikes - 1)}>Dislikes: {dislikes}</p>
          </section>}
      </article>
      {isAuthor && <div>
        <Link className="btn" to={`/edit/${storyId}`}>
          Edit Story
        </Link>
        <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteHandler()}} className="btn delete">
          Delete Story
        </button>
      </div>}
    </>
  );
};

export default Details;
