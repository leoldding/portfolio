import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/portftolio/js/Home';
import Projects from './components/portftolio/js/Projects';
import Navbar from './components/portftolio/js/Navbar';

import './styles.css';

function App() {
  return (
      <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </Router>
      </div>
  )
}

export default App;
