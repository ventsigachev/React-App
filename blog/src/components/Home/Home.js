import { useState, useEffect, useContext } from "react";
import Story from "./Story/Story";
import "./Home.css";
import { userContext } from "../../auth/Authentication";

const API_URL = "http://localhost:3030/jsonstore";

const Home = () => {
  const [story, setStory] = useState([]);
  const userData = useContext(userContext)[0];


  useEffect(() => {
    fetch(`${API_URL}/story`)
      .then((res) => res.json())
      .then((data) => setStory(Object.values(data)));
  }, []);

  return story.length > 0 ? (
    <div className="story-list">
      <p>{userData.email}</p>
      <p>{userData.username}</p>
      <p>{userData.accessToken}</p>
      <p>{userData._id}</p>
      {story.map((story) => (
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
