import { userContext } from "./Authentication";
import { useContext } from "react";
import { Navigate } from "react-router-dom";


export const componentGuard = (Component) => {
    
    const GuardedComponent = (props) => {

        const isUser = useContext(userContext)[0];

        return isUser.accessToken ?
        < Component {...props} />
        :
        <Navigate to="/login" />
    }

    return GuardedComponent;
}
