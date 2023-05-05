import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomeScreen from './Components/HomeScreen';
import Users from './Components/Dashboard_Screens/Users';
import Dashboard from './Components/Dashboard_Screens/Dashboard';
import Orders from './Components/Dashboard_Screens/Orders';
import Products from './Components/Dashboard_Screens/Products';
import Customers from './Components/Dashboard_Screens/Customers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homescreen" element={<HomeScreen />}>
          <Route path="/homescreen" element={<Users />} />
          <Route path="/homescreen/1" element={<Dashboard />} />
          <Route path="/homescreen/2" element={<Orders />} />
          <Route path="/homescreen/3" element={<Products />} />
          <Route path="/homescreen/4" element={<Customers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
