import "./Story.css";

import { Link } from 'react-router-dom';

const Story = ({ story }) => {

  console.log(story.likes)


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
            <i className="fas fa-thumbs-up">{story.likes.length}</i>
            <i className="fas fa-thumbs-down">{story.dislikes.length}</i>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Story;
