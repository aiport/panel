import React from 'react'
import '../assets/css/navbar.css'
// import { Link } from 'react-router-dom'
import Login from './Login'
import AdminNavbar from './AdminNavbar'
import Cookies from 'js-cookie'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTerminal, faFolderOpen, faDatabase, faCalendarDays, faHouseUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
export default function ServerNavbar() {
    const { id } = useParams();
  return (
    <>
    <div className="navbar">
      <nav>
        <div className="navLogo">
          <div className="img navImg"></div>
          <h1>aiport</h1>
        </div>
        <ul className="list">
        <NavLink to={`/server/${id}/console`} activeClassName="active">
          <li>
            <FontAwesomeIcon icon={faTerminal} className='icon' />
            <div className="text">Console</div>
          </li>
          </NavLink>
          <NavLink to={`/server/${id}/files`} activeClassName="active">
          <li>
            <FontAwesomeIcon icon={faFolderOpen} className='icon' />
            <div className="text">   Files</div>
          </li>
          </NavLink>
          <NavLink to={`/server/${id}/database`} activeClassName="active">
          <li>
            <FontAwesomeIcon icon={faDatabase} className='icon' />
            <div className="text">Database</div>
          </li>
          </NavLink>
          <NavLink to={`/server/${id}/shedules`} activeClassName="active">
          <li>
            <FontAwesomeIcon icon={faCalendarDays} className='icon' />
            <div className="text">Schedules</div>
          </li>
          </NavLink>
          <NavLink to={`/server/${id}/shedules`} activeClassName="active">
          <li>
            <FontAwesomeIcon icon={faUsers} className='icon' />
            <div className="text" style={
                {width:'95%'}
            }>Users</div>
          </li>
          </NavLink>
          {/* {Cookies.get('token')? <AdminNavbar /> : null} */}
        </ul>
      </nav>
    </div>
    </>
  )
}