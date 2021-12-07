import { useState, useEffect } from "react";
import Story from "./Story/Story";
import "./Home.css";
import { componentGuard } from "../../auth/componentGuard";

const API_URL = "http://localhost:3030/data";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true);

    fetch(`${API_URL}/stories`)
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
      });

    setIsLoading(false);

  }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && stories.length > 0 && 
      <div className="story-list">
        {stories.map((story) => (
          <Story key={story._id} story={story} />
        ))}
      </div>}

      {!isLoading && stories.length === 0 &&
        <div className="no-story home">
          <p>There are no stories to display</p>
        </div>
      }
    </>
  );
};

export default componentGuard(Home);
