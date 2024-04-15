import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ children }) => {
    const { authState } = useContext(AuthContext)
    return (authState.logged) ? <Navigate to={"/marvel"} /> : children;
};
