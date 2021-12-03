import "./SignOut.css";
import { Link } from "react-router-dom";
import { userContext } from "../../auth/Authentication";
import { useContext } from "react";
import INITIAL_STATE from "../../auth/states";

const SignOut = () => {
  const [userData, delUserData] = useContext(userContext);

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
              fetch("http://localhost:3030/users/logout", {
                method: "GET",
                headers: {"X-Authorization": userData.accessToken}
              })
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
