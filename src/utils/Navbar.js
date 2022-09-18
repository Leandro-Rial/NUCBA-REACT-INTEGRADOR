import React from 'react'

import { logout } from '../redux/slices/user/userSlices';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.user);

  const onClickLogout = async () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div className="nabvar--wrapper">
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><MenuIcon htmlColor='#fff' /></button>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Welcome Jorgito Porcel JR</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ color: "#fff" }}></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">About</Link>
            </li>
          </ul>
          <div className="logout--wrapper">
            <p className="logout--text" onClick={() => onClickLogout()}>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar