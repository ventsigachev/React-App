import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Errors from "../../notifications/Errors";
import Success from "../../notifications/Success";

const LOG_API = "http://localhost:3030/users/login";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [ message, setMessage] = useState(null);
  const navigate = useNavigate();

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
      console.log(data);

      if (!res.ok) {
        throw new Error();
      }

      setErr(null);
      setMessage("Successfully SignIn! You will be redirect to Home Page!");
      setTimeout(() => {
        navigate("/home");
      }, 7000);
    } catch (error) {
      setErr(error);
    }
  };

  return (
    <>
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
