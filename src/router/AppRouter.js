import React, { useEffect, useState } from 'react'

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutUs/AboutUs';
import ProductsView from '../pages/products/ProductsView';
import PrivateRouter from './PrivateRouter';

import PageNotFound from '../utils/PageNotFound';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';

const AppRouter = () => {

  const { token } = useSelector(state => state.user);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={ token ? <Navigate to="/home" /> : <Navigate to='/login' /> }
        />

        <Route exact path='/login' element={<Login />} />
        <Route exact path='/sign-up' element={<Register />} />

        <Route
          path='/home'
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />
        <Route
          path='/about-us'
          element={
            <PrivateRouter>
              <AboutUs />
            </PrivateRouter>
          }
        />
        <Route
          path='/products'
          element={
            <PrivateRouter>
              <ProductsView />
            </PrivateRouter>
          }
        />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRouter