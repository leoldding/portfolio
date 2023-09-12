import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/portfolio/js/Home";
import Projects from "./components/portfolio/js/Projects";
import Navbar from "./components/portfolio/js/Navbar";
import Footer from "./components/portfolio/js/Footer";
import NotFound from "./components/portfolio/js/404";

import "./styles.css";

function App() {
    return (
      <div className={"h-screen"}>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element={<Navigate to={"/404"} replace/>}/>
            </Routes>
            <Footer />
        </Router>
      </div>
    )
}

export default App;
