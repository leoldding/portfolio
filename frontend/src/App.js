import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/portftolio/js/Home';
import Projects from './components/portftolio/js/Projects';
import About from './components/portftolio/js/About';
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
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
      </div>
  )
}

export default App;
