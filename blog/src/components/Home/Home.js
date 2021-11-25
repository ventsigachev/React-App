import { useState, useEffect } from "react";
import Story from "./Story/Story";
import "./Home.css";

const API_URL = "http://localhost:3030/jsonstore";

const Home = () => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/story`)
      .then((res) => res.json())
      .then((data) => 
      setStory(Object.values(data)));
  }, []);

  return (
    story.length > 0 ?
    <div className="story-list">
      {story.map((story) => (
        <Story key={story._id} story={story} />
      ))}
    </div> : 
    <div className="not-story">
       <p>There are no stories to display</p>
        
    </div>
    
  );
};

export default Home;
