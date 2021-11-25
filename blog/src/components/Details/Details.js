const Details = () => {
  return (
    <article class="media content-section">
      <img
        src={/images/default_pic.jpg}
        alt="image"
        height="55"
        width="55"
      />
      <div class="media-body">
        <div class="article-metadata">
          <p>
            {object.author}
          </p>
          <small class="text-muted">{object.date}</small>
        </div>
        <h2 class="article-title">{object.title}</h2>
        <p class="article-content">{object.content}</p>
      </div>
      <a
        class="btn btn-default btn-sm"
        href="{% url 'story update' object.id %}"
      >
        Edit Story
      </a>
      <a
        class="btn btn-default btn-sm"
        href="{% url 'story delete' object.id %}"
      >
        Delete Story
      </a>
    </article>
  );
};

export default Details;
