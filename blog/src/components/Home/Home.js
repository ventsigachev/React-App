import { useState, useEffect } from "react";
import Story from "./Story/Story";
import "./Home.css";

const API_URL = "http://localhost:3030/data";

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/stories`)
      .then((res) => res.json())
      .then((data) => {
        
        setStories(data)

      });
  }, []);

  return stories.length > 0 ? (
    <div className="story-list">
      {stories.map((story) => (
        <Story key={story._id} story={story} />
      ))}
    </div>
  ) : (
    <div className="no-story">
      <p>There are no stories to display</p>
    </div>
  );
};

export default Home;
