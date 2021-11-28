import "./Details.css";

import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3030/jsonstore";

const Details = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  
  const [story, setStory] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/story/${storyId}`)
      .then((res) => res.json())
      .then((data) => setStory(data));
  }, [storyId]);

  const deleteHandle = () => {

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
        <img src="/images/default_pic.jpg" alt="img" height="55" width="55" />
        <div className="media-body">
          <div className="article-metadata">
            <p>{story.author}</p>
            <small className="text-muted">{story.date}</small>
          </div>
          <h2 className="article-title">{story.title}</h2>
          <p className="article-content">{story.about}</p>
        </div>
        <div className="article-description">
          <h3>{story.description}</h3>
        </div>
        <section className="details-likes-dislikes">
            <p >Likes: {story.likes}</p>
            <p >Dislikes: {story.dislikes}</p>
          </section>
      </article>
      <div>
        <Link className="btn" to={`/edit/${storyId}`}>
          Edit Story
        </Link>
        <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteHandle()}} className="btn delete">
          Delete Story
        </button>
      </div>
    </>
  );
};

export default Details;
