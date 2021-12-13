import "./Profile.css";
import Errors from "../../notifications/Errors";
import Success from "../../notifications/Success";
import { userContext } from "../../auth/Authentication";
import { useContext, useState, useEffect } from "react";
import { componentGuard } from "../../auth/componentGuard";
import { useNavigate } from "react-router-dom";

const PROFILE_API = "http://localhost:3030/data";

const Profile = () => {
  const user = useContext(userContext)[0];
  const [picture, setPicture] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState(0);
  const [interests, setInterests] = useState("");
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  if (!picture) setPicture("images/default_pic.jpg");

  useEffect(() => {
    
    fetch(`${PROFILE_API}/profiles`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.code) {
          const profile = data.filter((p) => p._ownerId === user._id)[0];

          if (profile) {

            setPicture(profile.picture);
            setFirstName(profile.fName);
            setLastName(profile.lName);
            setCountry(profile.country);
            setAge(profile.age);
            setInterests(profile.interests);
            setProfileId(profile._id);
            setUpdate(true);
          }
          
        }
      });
  }, [user]);

  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  const deleteHandler = () => {
    // console.log("delete");
    fetch(`${PROFILE_API}/profiles/${profileId}`, {
      method: "DELETE",
      headers: { "X-Authorization": user.accessToken },
    }).then(() => {
      navigate("/home");
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    try {
      if (age <= 0) {
        throw new Error(
          "Age must be greater than zero! Please enter a valid age!"
        );
      }

      const fName = firstName;
      const lName = lastName;
      const profile = { picture, fName, lName, country, age, interests };

      if (!update) {

        fetch(`${PROFILE_API}/profiles`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": user.accessToken,
          },
          body: JSON.stringify(profile),
        });

        setErrors(null);
        setMessage("Your Profile has been Created!");

      }else {
        fetch(`${PROFILE_API}/profiles/${profileId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": user.accessToken,
          },
          body: JSON.stringify(profile),
        });
  
        setErrors(null);
        setMessage("Your Profile has been Updated!");
      }
      
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    
      <div className="profileContainer">
        <h1 className="profileContainerTitle"><span className="profileUsername">{user.username}</span> profile</h1>
        <p>{user.accessToken}</p>
        <p>{user._id}</p>
        <form className="profileForm" onSubmit={onSubmitHandler}>
          <div className="profilePicture">
            <img src={picture} alt="avatar" className="profileImg" />
            <input type="file" className="browse" onChange={onChangePicture} />
          </div>
          <p className="profileEmail">{user.email}</p>
          <div className="profileFields">
            <label htmlFor="first_name">Your First Name</label>
            <input
              value={firstName}
              className="contactInput"
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter Your first name here"
              autoFocus={true}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="last_name">Your Last Name</label>
            <input
              value={lastName}
              className="contactInput"
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter Your last name here"
              onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="country">Country</label>
            <select
              className="contactInput"
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="blank">------------</option>
              <option value="Bulgaria">BULGARIA</option>
              <option value="Germany">GERMANY</option>
              <option value="USA">USA</option>
            </select>

            <label htmlFor="age">Your Age</label>
            <input
              value={age}
              className="contactInput"
              type="number"
              id="age"
              name="age"
              placeholder="Enter Your age here"
              onChange={(e) => setAge(e.target.value)}
            />

            <label htmlFor="interests">Your Interests</label>
            <textarea
              value={interests}
              className="contactInput"
              id="interests"
              name="interests"
              placeholder="Enter Your interests here"
              onChange={(e) => setInterests(e.target.value)}
            ></textarea>

            {!update && (
              <button className="btn" type="submit">
                Create
              </button>
            )}

            {update && (
              <button className="btn" type="submit">
                Update
              </button>
            )}
          </div>
        </form>
        {update && (
          <button className="btn btnDelete" onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              deleteHandler();
          }}>
            Delete
          </button>
        )}
        {message && <Success mes={message} />}
        {errors && <Errors message={errors} />}
      </div>    
  );
};

export default componentGuard(Profile);
