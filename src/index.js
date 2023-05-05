import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import HomeScreen from './components/homeScreen';
import Users from './components/dashboardScreens/users.jsx';
import Dashboard from './components/dashboardScreens/dashboard';
import Orders from './components/dashboardScreens/orders';
import Products from './components/dashboardScreens/products';
import Customers from './components/dashboardScreens/customers';

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
