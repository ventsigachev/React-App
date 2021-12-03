import "./Navigation.css";
import { Link } from "react-router-dom";
import { userContext } from "../../auth/Authentication";
import { useContext } from "react";

const Navigation = ({ user }) => {
  const userData = useContext(userContext)[0];
  const isUser = userData.accessToken;

  return (
    <div className=" navbar" id="navbar-brand-centered">
      <ul className="nav navbar-nav navbar-left">
        {isUser && (
          <li>
            <Link to="/home">HOME</Link>
          </li>
        )}
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        {isUser && (
          <li>
            <Link to="/add-story">WriteStory</Link>
          </li>
        )}
      </ul>

      <div className="nav-text">Story Teller</div>

      <ul className="nav navbar-nav navbar-right">
        {isUser && (
          <li>
            <Link to="/user-stories">My Stories</Link>
          </li>
        )}
        {isUser && (
          <li>
            <Link to="/profile">Hello, {userData.username}!</Link>
          </li>
        )}
        {isUser && (
          <li>
            <Link to="/logout">Sign Out</Link>
          </li>
        )}
        {!isUser && (
          <li>
            <Link to="/login">Sign In</Link>
          </li>
        )}
        {!isUser && (
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
