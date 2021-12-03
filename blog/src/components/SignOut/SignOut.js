import "./SignOut.css";
import { Link } from "react-router-dom";
import { userContext } from "../../auth/Authentication";
import { useContext } from "react";
import INITIAL_STATE from "../../auth/states";

const SignOut = () => {
  const delUserData = useContext(userContext)[1];

  return (
    <div className="logout">
      <div className="logoutWrapper">
        <div className="logoutMessage">
          <p className="msg">Sorry to see You escape!</p>
          <p className="msg1">Are You leaving, really?</p>
        </div>
        <div className="buttons">
          <Link
            to="/"
            className="bt exit"
            onClick={() => {
              delUserData(INITIAL_STATE);
            }}
          >
            Leave
          </Link>
          <Link to="/home" className="bt back">
            go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
