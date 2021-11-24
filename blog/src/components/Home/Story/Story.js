import "./Story.css";

const Story = ({ story }) => {

  

  return (
    <article className="story content-section">
      <img className="article-img" src="/images/default_pic.jpg" alt="img" />
      <div className="story-body">
        <div className="article-metadata">
          <p className="article-author">{story.author}</p>
          <small className="text-muted">{story.date}</small>
        </div>
        <h2>
          <a className="article-title" href="{% url 'story detail' story.id %}">
            {story.title}
          </a>
        </h2>
        <div className="article-about">
          <p>{story.about}</p>
          <section className="likes-dislikes">
            <i class="fas fa-thumbs-up">{story.likes}</i>
            <i class="fas fa-thumbs-down">{story.dislikes}</i>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Story;
