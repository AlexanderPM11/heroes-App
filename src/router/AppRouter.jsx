import {
    Route, Routes
} from "react-router-dom";
import { LoginPage } from "../auth/pages/index";


import { HeroesRoutes } from "../Heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Search } from "../Heroes/pages/Search";


export const AppRouter = () => {
    return (

        <>
            <Routes>


                <Route
                    path="login"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>

                    }
                />
                <Route
                    path="/*"
                    element=
                    {
                        <PrivateRoute>
                            <HeroesRoutes />
                        </PrivateRoute>
                    }
                />

            </Routes>
        </>

    )
};