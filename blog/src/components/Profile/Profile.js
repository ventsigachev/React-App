import "./Profile.css";
import { userContext } from "../../auth/Authentication";
import { useContext, useState } from "react";

const Profile = () => {
  const userData = useContext(userContext)[0];
  const [picture, setPicture] = useState(userData.avatar);
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="profileContainer">
      <h1 className="profileContainerTitle" >{userData.username} User Profile</h1>
      <p>{userData.accessToken}</p>
      <p>{userData._id}</p>
      <form className="profileForm">
        <div className="profilePicture">
          <img
            src={picture}
            alt="avatar"
            className="profileImg"
          />
          <input type="file" className="browse" onChange={onChangePicture}/>

        </div>
        <p className="profileEmail">{userData.email}</p>
        <div className="profileFields">
          <label htmlFor="first_name">Your First Name</label>
          <input
            className="contactInput"
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter Your first name here"
            required
            autoFocus={true}
          />

          <label htmlFor="last_name">Your Last Name</label>
          <input
            className="contactInput"
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter Your last name here"
            required
          />

          <label htmlFor="username">Your Username</label>
          <input
            className="contactInput"
            type="text"
            id="username"
            name="username"
            placeholder="Enter Your Username here"
            required
          />

          <label htmlFor="country">Country</label>
          <select className="contactInput" id="country" name="country">
            <option value="blank">------------</option>
            <option value="Bulgaria">BULGARIA</option>
            <option value="Germany">GERMANY</option>
            <option value="USA">USA</option>
          </select>

          <label htmlFor="age">Your Age</label>
          <input
            className="contactInput"
            type="text"
            id="age"
            name="age"
            placeholder="Enter Your age here"
            required
          />

          <label htmlFor="interests">Your Interests</label>
          <textarea
            className="contactInput"
            id="interests"
            name="interests"
            placeholder="Enter Your interests here"
            required
          ></textarea>

          <button className="btn" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
