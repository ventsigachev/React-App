import "./Story.css";

import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { userContext } from "../../../auth/Authentication";
import { useContext } from "react";
import * as likeService from "../../../services/likeService";
import * as dislikeService from "../../../services/dislikeService";


const Story = ({ story }) => {

  const storyId = story._id;
  const user = useContext(userContext)[0];
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    likeService.getStoryLikes(user, storyId).then((data) => {

      if (!data.code) {
        const l = data.map((x) => x.userId);
        setLikes(l.length);

      }
    });
  }, [user, storyId]);

  useEffect(() => {
    dislikeService.getStoryDislikes(user, storyId).then((data) => {

      if (!data.code) {
        const d = data.map((x) => x.userId);
        setDislikes(d.length);

      }
    });
  }, [user, storyId]);

  return (
    <article className="story content-section">
      <img className="article-img" src={story.authorAvatar} alt="img" />
      <div className="story-body">
        <div className="article-metadata">
          <p className="article-author-story">{story.authorName}</p>
          <small className="text-muted">{story.date}</small>
        </div>
        <h2>
          <Link className="article-title" to={`/details/${story._id}`}>
            {story.title}
          </Link>
        </h2>
        <div className="article-about">
          <p>{story.about}</p>
          <section className="likes-dislikes">
            <i className="fas fa-thumbs-up">{likes}</i>
            <i className="fas fa-thumbs-down">{dislikes}</i>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Story;
