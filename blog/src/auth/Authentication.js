import React, { useState } from "react";
import INITIAL_STATE from "./states";


export const userContext = React.createContext();

const Store = ({ children }) => {
  const [userData, setUserData] = useState(INITIAL_STATE);

  return <userContext.Provider value={[userData, setUserData]}>{children}</userContext.Provider>;
};

export default Store;
