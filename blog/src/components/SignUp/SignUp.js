import "./SignUp.css";

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
            <button className="loginButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
