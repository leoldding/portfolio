import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PortfolioRoutes from "./components/portfolio/js/PortfolioRoutes";

import "./styles.css";

function App() {
    return (
      <div>
        <Router>
            <PortfolioRoutes />
        </Router>
      </div>
    )
}

export default App;
