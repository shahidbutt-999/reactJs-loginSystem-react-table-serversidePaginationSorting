import LoginPage from './components/loginPage/loginPage.jsx';
import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actions/actionTypes.js";
// Components Export
import AdminPage from './components/adminPage/adminPage';
import Users from './components/adminPage/usersScreen/users.jsx';
import Dashboard from './components/adminPage/dashboardScreen/dashboard';
import Orders from './components/adminPage/ordersScreen/orders';
import Products from './components/adminPage/productsScreen/products';
import Customers from './components/adminPage/customersScreen/customers';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Testing from './Testing.jsx';




function App(props) {
  console.log("i am rendering | APP COMPONENT");

  const PrivateRoutes = () => {
    let auth = window.localStorage.getItem("token");
    console.log(props.isLoggedIn, "private routes in action");
    return (
      props.isLoggedIn ? <Outlet /> : <Navigate to='/' />
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=
          {
            <div className="App">
              <header className="App-header">
                <LoginPage />
                {/* <Testing /> */}
              </header>
            </div>
          }
        />
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

  );
}


const mapStateToProps = (state) => {

  return {
    isLoggedIn: state.isAuthorize.isLoggedIn,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    onLogOut: () => dispatch({ type: actionTypes.LOG_OUT }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
