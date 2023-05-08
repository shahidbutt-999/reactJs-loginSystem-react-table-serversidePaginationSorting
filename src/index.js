import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import HomeScreen from './components/adminPage/adminPage';
import Users from './components/adminPage/usersScreen/users.jsx';
import Dashboard from './components/adminPage/dashboardScreen/dashboard';
import Orders from './components/adminPage/ordersScreen/orders';
import Products from './components/adminPage/productsScreen/products';
import Customers from './components/adminPage/customersScreen/customers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
