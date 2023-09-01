import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/portfolio/js/Home";
import Projects from "./components/portfolio/js/Projects";
import Navbar from "./components/portfolio/js/Navbar";

import "./styles.css";

function App() {
    return (
      <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </Router>
      </div>
    )
}

export default App;
