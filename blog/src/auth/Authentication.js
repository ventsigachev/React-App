import React, { useState } from "react";

const initialState = {
  username: "",
  email: "",
  avatar: "",
  _id: "",
  accessToken: "",
};

export const userContext = React.createContext();

const Store = ({ children }) => {
  const [userData, setUserData] = useState(initialState);

  return <userContext.Provider value={[userData, setUserData]}>{children}</userContext.Provider>;
};

export default Store;
