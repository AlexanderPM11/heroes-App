import { Navbar } from "../../ui/Components";
import {
    Route, Routes, Navigate
} from "react-router-dom";
import { DcPage } from "../pages/Dcpage";
import { MarvelPage } from "../pages/MarvelPage";
import { Search } from "../pages/Search";
import { Hero } from "../pages/Hero";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route
                        path="dc"
                        element={<DcPage />}
                    />
                    <Route
                        path="marvel"
                        element={<MarvelPage />}
                    />
                    <Route
                        path="search"
                        element={<Search />}
                    />
                    <Route
                        path="hero/:heroid"
                        element={<Hero />}
                    />

                    <Route
                        path="/"
                        element={<Navigate to="/marvel" />}
                    />
                </Routes>
            </div>

        </>
    );
};
