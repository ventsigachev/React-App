import "./Story.css";
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Story = ({ story }) => {

  let likesCount = story.likes;
  const [likes, setLikes] = useState(likesCount);

  let dislikesCount = story.dislikes;
  const [dislikes, setDislikes] = useState(dislikesCount)

  return (
    <article className="story content-section">
      <img className="article-img" src="/images/default_pic.jpg" alt="img" />
      <div className="story-body">
        <div className="article-metadata">
          <p className="article-author">{story.author}</p>
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
            <i onClick={() => setLikes(prevLikes => prevLikes + 1)} class="fas fa-thumbs-up">{likes}</i>
            <i onClick={() => setDislikes(prevDislikes => prevDislikes - 1)} class="fas fa-thumbs-down">{dislikes}</i>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Story;
