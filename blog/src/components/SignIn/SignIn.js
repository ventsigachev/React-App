import "./SignIn.css";

const SignIn = () => {
  return (
    <h1>
      {" "}
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
                Log In
              </button>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </h1>
  );
};

export default SignIn;
