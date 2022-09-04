import React from 'react'

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/home/Home';
import PageNotFound from '../utils/PageNotFound';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRouter