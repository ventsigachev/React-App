import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">StoryTeller</h3>
          <span className="loginDesc">
            Tell Your Story on <i>StoryTeller</i>.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              className="loginInput"
              placeholder="Username"
              type="text"
              required
              autoFocus
            />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
              required
            />
            <button className="loginButton" type="submit">
              Log into Account
            </button>
            <Link to="/register" className="regBtn">
              Create New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
