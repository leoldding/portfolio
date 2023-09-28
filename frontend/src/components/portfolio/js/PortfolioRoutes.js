import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import NotFound from "./404";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PortfolioRoutes() {
    return (
        <div className={"h-screen"}>
            <Loader />
            <Navbar />
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path="404" element={<NotFound/>}/>
                <Route path="*" element={<Navigate to={"404"} replace/>}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default PortfolioRoutes;
