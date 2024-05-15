import React from 'react'
import '../assets/css/navbar.css'
// import { Link } from 'react-router-dom'
import Login from './Login'
import AdminNavbar from './AdminNavbar'
import Cookies from 'js-cookie'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faServer } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    <>
    <div className="navbar">
      <nav>
        <div className="navLogo">
          <div className="img navImg"></div>
          <h1>aiport</h1>
        </div>
        <ul className="list">
        <NavLink to='/account' activeClassName="active">
          <li>
            <FontAwesomeIcon icon={faUser} className='icon' />
            <div className="text">Account</div>
          </li>
          </NavLink>
          <NavLink to='/'  activeClassName="active">
          <li>
            <FontAwesomeIcon icon={faServer} className='icon' />
            <div className="text">Servers</div>
          </li>
          </NavLink>
          {Cookies.get('token')? <AdminNavbar /> : null}
        </ul>
      </nav>
    </div>
    </>
  )
}