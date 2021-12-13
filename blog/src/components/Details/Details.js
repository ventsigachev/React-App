import "./Details.css";
import * as likeService from "../../services/likeService";
import * as dislikeService from "../../services/dislikeService";

import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { userContext } from "../../auth/Authentication";
import { useContext } from "react";
import { componentGuard } from "../../auth/componentGuard";

const API_URL = "http://localhost:3030/data";

const Details = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const user = useContext(userContext)[0];
  const [story, setStory] = useState({});
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  const isAuthor = story.authorId === user._id ? true : false;

  useEffect(() => {
    fetch(`${API_URL}/stories/${storyId}`)
      .then((res) => res.json())
      .then((data) => setStory(data));
  }, [storyId]);

  useEffect(() => {
    likeService.getStoryLikes(user, storyId).then((data) => {
      if (!data.code) {
        const l = data.map((x) => x.userId);
        setLikes((prevLikes) => [...prevLikes, ...l]);
      }
    });
  }, [user, storyId]);

  useEffect(() => {
    dislikeService.getStoryDislikes(user, storyId).then((data) => {
      if (!data.code) {
        const d = data.map((x) => x.userId);
        setDislikes((prevDislikes) => [...prevDislikes, ...d]);
      }
    });
  }, [user, storyId]);

  const likesHandler = () => {
    likeService.like(user, storyId).then((res) => {
      if (res.ok) {
        setLikes((prevLikes) => [...prevLikes, user._id]);
      }
      res.json();
    });
  };

  const dislikesHandler = () => {
    dislikeService.dislike(user, storyId).then((res) => {
      if (res.ok) {
        setDislikes((prevLikes) => [...prevLikes, user._id]);
      }
      res.json();
    });
  };

  const deleteHandler = () => {
    fetch(`${API_URL}/stories/${storyId}`, {
      method: "DELETE",
      headers: { "X-Authorization": user.accessToken },
    }).then(() => {
      navigate("/home");
    });
  };

  return (
    <>
      <article className="content-section">
        <img src={story.authorAvatar} alt="img" height="55" width="55" />
        <div className="media-body">
          <div className="article-metadata">
            <p className="article-author">{story.authorName}</p>
            <small className="text-muted">{story.date}</small>
          </div>
          <h2 className="article-title-details">{story.title}</h2>
          <p className="article-content">{story.about}</p>
        </div>
        <div className="article-description-details">
          <h3>{story.description}</h3>
        </div>
        {!isAuthor && (
          <section className="details-likes-dislikes">
            <p onClick={likesHandler}>Likes: {likes.length}</p>
            <p onClick={dislikesHandler}>Dislikes: {dislikes.length}</p>
          </section>
        )}
      </article>
      {isAuthor && (
        <div>
          <Link className="btn" to={`/edit/${storyId}`}>
            Edit Story
          </Link>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                deleteHandler();
            }}
            className="btn delete"
          >
            Delete Story
          </button>
        </div>
      )}
    </>
  );
};

export default componentGuard(Details);
