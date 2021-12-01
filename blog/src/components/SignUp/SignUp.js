import "./SignUp.css";
import { Link } from "react-router-dom";
import {useState} from "react";

const REG_API = "http://localhost:3030/users/register";
const domains = [".com", ".bg", ".net", ".org"]

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const avatar = "/images/default_pic.jpg";


  const submitHandler = (e) => {
    e.preventDefault();

    const isThere = domains.some(d => email.includes(d));  

    if (!email.includes("@") || !isThere) {
      window.alert("Please, write a valid email address!")
    }



    e.target.reset();
  }

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
          <form className="regBox" onSubmit={submitHandler}>
            <input
              className="regInput"
              placeholder="Username"
              required
              autoFocus
              value={username}
              onChange={(e) => {setUsername(e.target.value)}}
            />
            <input
              className="regInput"
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <input
              className="regInput"
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <input
              className="regInput"
              placeholder="Password Confirmation"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => {setConfirmPassword(e.target.value)}}
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
