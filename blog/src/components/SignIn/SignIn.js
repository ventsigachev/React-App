import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Errors from "../../notifications/Errors";
import Success from "../../notifications/Success";
import { userContext } from "../../auth/Authentication";
import { useContext } from "react";

const LOG_API = "http://localhost:3030/users/login";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [ message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(userContext);

  const user = { email, password };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch(`${LOG_API}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),

      });

      const data = await res.json();
    
      if (!res.ok) {
        throw new Error(data.message);
      }

      console.log(data);
      setUserData(data);
      console.log(userData);

      setErr(null);
      setMessage("Successfully Signed In! You will be redirect to Home Page!");
      setTimeout(() => {
        navigate("/home");
      }, 5000);

    } catch (error) {

      setErr(`${error.message}! Please, try again!`);

    }
  };

  return (
    <>
    <p>{userData.email}</p>
    <p>{userData.username}</p>
    <p>{userData.accessToken}</p>
    <p>{userData._id}</p>

    {message && <Success mes={message} />}
    {err && <Errors message={err} />}
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">StoryTeller</h3>
            <span className="loginDesc">
              Tell Your Story on <i>StoryTeller</i>.
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={submitHandler}>
              <input
                className="loginInput"
                placeholder="Email"
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="loginInput"
                placeholder="Password"
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
    </>
  );
};

export default SignIn;
