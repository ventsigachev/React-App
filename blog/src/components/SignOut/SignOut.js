import "./SignOut.css";
import { Link } from "react-router-dom";

const SignOut = () => {
  return (
    <div className="logout">
      <div className="logoutWrapper">
        <div className="logoutMessage">
          <p className="msg">Sorry to see You escape!</p>
          <p className="msg1">Are You leaving, really?</p>
        </div>
        <div className="buttons">
          <Link to="/" className="bt exit">Leave</Link>
          <Link to="#" className="bt back">go back</Link>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
