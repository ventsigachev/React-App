import { useState, useEffect } from "react";
import Story from "./Story/Story";

const API_URL = "http://localhost:3030/jsonstore/";

const Home = () => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}story/`)
      .then((res) => res.json())
      .then((data) => 
      setStory(Object.values(data)));
  }, []);

  return (
    <div className="story-list">
      {story.map((story) => (
        <Story key={story._id} story={story} />
      ))}
    </div>
  );
};

export default Home;
