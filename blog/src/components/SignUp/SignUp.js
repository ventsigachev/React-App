import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="reg">
      <div className="regWrapper">
        <div className="regLeft">
          <h3 className="regLogo">StoryTeller</h3>
          <span className="regDesc">
            Tell Your story on <i>StoryTeller</i>.
          </span>
        </div>
        <div className="regRight">
          <form className="regBox">
            <input
              className="regInput"
              placeholder="Username"
              required
              autoFocus
            />
            <input
              className="regInput"
              placeholder="Email"
              type="email"
              required
            />
            <input
              className="regInput"
              placeholder="Password"
              type="password"
              required
            />
            <input
              className="regInput"
              placeholder="Password Again"
              type="password"
              required
            />
            <button className="regButton" type="submit">
              Create Account
            </button>
            <Link to="/login" className="logBtn">
              Log into Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
