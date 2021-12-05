import { componentGuard } from "../../auth/componentGuard";
import { useState, useEffect, useContext } from "react";
import Story from "../Home/Story/";
import "./MyStories.css";
import { userContext } from "../../auth/Authentication";

const API_URL = "http://localhost:3030/data";

const MyStories = () => {
  const user = useContext(userContext)[0];
  const [userStories, setUserStories] = useState([]);

  const name = user.username.charAt(0).toUpperCase() + user.username.slice(1)

  useEffect(() => {
    fetch(`${API_URL}/stories`)
      .then((res) => res.json())
      .then((data) => {

        const uStories = data.filter((s) => s._ownerId === user._id);

        setUserStories(uStories);

      });
  }, [user]);

  return userStories.length > 0 ? (
    <div className="story-list">
      {userStories.map((story) => (
        <Story key={story._id} story={story} />
      ))}
    </div>
  ) : (
    <div className="no-story myStory">
      <p>Hello, {name}! You have not written anything else! Let's give a try!</p>
    </div>
  );
};

export default componentGuard(MyStories);
