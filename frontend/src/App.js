import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PortfolioRoutes from "./components/portfolio/js/PortfolioRoutes";

import "./styles.css";

function App() {
    return (
      <div>
        <Router>
            <Routes>
                <Route path={"/*"} element={<PortfolioRoutes/>} />
            </Routes>
        </Router>
      </div>
    )
}

export default App;
