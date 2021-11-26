import "./Details.css";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3030/jsonstore";

const Details = () => {
  const id = useParams().storyId;
  
  const [story, setStory] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/story/${id}`)
      .then((res) => res.json())
      .then((data) => setStory(data));
  }, [id]);


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
        <Link className="btn" to="/">
          Edit Story
        </Link>
        <Link className="btn" to="/">
          Delete Story
        </Link>
      </div>
    </>
  );
};

export default Details;
