import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {

    const { authState } = useContext(AuthContext)
    return (authState.logged)
        ? children
        : <Navigate to={"/login"} />
};
