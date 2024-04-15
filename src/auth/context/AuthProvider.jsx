import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";

const initialState = {
    logged: false,
}
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        payload: user
    }
}

// eslint-disable-next-line react/prop-types

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState, init)

    const login = (name = '') => {
        const payload = {
            id: 'as',
            name
        };
        const action = {
            type: types.login,
            payload
        }

        localStorage.setItem('user', JSON.stringify(payload))
        dispatch(action);
    }


    const logout = () => {
        localStorage.removeItem('user')
        const action = {
            type: types.logout
        }
        dispatch(action);
    }



    return (
        <div>
            <AuthContext.Provider
                value={
                    {
                        authState,
                        login: login,
                        logout:logout
                    }
                }
            >
                {children}
            </AuthContext.Provider>
        </div>
    );
};
