
import React from 'react';
import ReactDOM from 'react-dom/client';
// reducers export
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./store/reducers/rootReducer";
// Components Export
import AdminPage from './components/adminPage/adminPage';
import Users from './components/adminPage/usersScreen/users.jsx';
import Dashboard from './components/adminPage/dashboardScreen/dashboard';
import Orders from './components/adminPage/ordersScreen/orders';
import Products from './components/adminPage/productsScreen/products';
import Customers from './components/adminPage/customersScreen/customers';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import App from './App';
// CSS Exports
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// creating store
const store = createStore(rootReducer);

const PrivateRoutes = () => {
  let auth = sessionStorage.getItem("User Info");
  return (
    auth ? <Outlet /> : <Navigate to='/' />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/adminpage" element={<AdminPage />}>
              <Route path="/adminpage" element={<Users />} />
              <Route path="/adminpage/dashboard" element={<Dashboard />} />
              <Route path="/adminpage/orders" element={<Orders />} />
              <Route path="/adminpage/products" element={<Products />} />
              <Route path="/adminpage/customers" element={<Customers />} />
            </Route>
          </Route>
          <Route path="*" element={<h1> Not Found </h1>} />

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



