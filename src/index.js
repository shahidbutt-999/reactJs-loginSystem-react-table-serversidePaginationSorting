import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './App';
import About from './Components/About';
import HomeScreen from './Components/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/homescreen" element={<HomeScreen />} />


      </Routes>
    </Router>
  </React.StrictMode>
);
