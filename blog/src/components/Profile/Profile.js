import { userContext } from "../../auth/Authentication";
import { useContext } from "react";

const Profile = () => {
  const userData = useContext(userContext)[0];

  return (
    <div>
      <h3>User Profile</h3>
      <p>{userData.email}</p>
      <p>{userData.username}</p>
      <p>{userData.accessToken}</p>
      <p>{userData._id}</p>
      <p>{userData.avatar}</p>

    </div>
  );
};

export default Profile;
