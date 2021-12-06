import "./SignUp.css";
import Errors from "../../notifications/Errors";
import Success from "../../notifications/Success";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userContext } from "../../auth/Authentication";
import { useContext } from "react";

const REG_API = "http://localhost:3030/users/register";
const domains = [".com", ".bg", ".net", ".org"];

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const registerData = useContext(userContext)[1];


  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isThere = domains.some((d) => email.includes(d));
  // const avatar = "/images/default_pic.jpg";

  const user = { username, email, password };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!email.includes("@") || !isThere) {
        throw new Error("Please, write a valid email address!");
      }

      if (password !== confirmPassword) {
        throw new Error(
          "Passwords do not match! Please, enter the same password in the Password Confirmation field!"
        );
      }

      const res = await fetch(`${REG_API}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setErr(null);
      registerData(data);
      setMessage("Your account has been created! You will be redirect to Profile Page!");
      setTimeout(() => {
          navigate("/profile")
      }, 7000);

    } catch (error) {
      
      setErr(error.message);

    }

  };

  return (
    <>
    {message && <Success mes={message} />}
    {err && <Errors message={err} />}
      <div className="reg">
        <div className="regWrapper">
          <div className="regLeft">
            <h3 className="regLogo">StoryTeller</h3>
            <span className="regDesc">
              Tell Your story on <i>StoryTeller</i>.
            </span>
          </div>
          <div className="regRight">
            <form className="regBox" onSubmit={submitHandler}>
              <input
                className="regInput"
                placeholder="Username"
                required
                autoFocus
                value={username}
                onChange={usernameHandler}
              />
              <input
                className="regInput"
                placeholder="Email"
                type="email"
                required
                value={email}
                onChange={emailHandler}
              />
              <input
                className="regInput"
                placeholder="Password"
                type="password"
                required
                value={password}
                onChange={passwordHandler}
              />
              <input
                className="regInput"
                placeholder="Password Confirmation"
                type="password"
                required
                value={confirmPassword}
                onChange={confirmPasswordHandler}
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
    </>
  );
};

export default SignUp;
