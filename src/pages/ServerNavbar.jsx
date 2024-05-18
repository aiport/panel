import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import Login from './Login'
import AdminNavbar from './AdminNavbar'
import Cookies from 'js-cookie'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal, faFolderOpen, faDatabase, faCalendarDays, faHouseUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'

export default function ServerNavbar() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null); // Stores user data

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:1000/user/info', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer authcode$1',
          'token': Cookies.get('token')
        }
      });
      const data = await response.json();
      console.log(data.info.userType);
      setUserData(data);
    }
    fetchData();
    // eslint-disable-next-line
  }, []); // Empty dependency array ensures data is fetched only once

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
                <div className="text">   Files</div>
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
                <div className="text" style={{ width: '95%' }}>
                  Users
                </div>
              </li>
            </NavLink>
            {/* Conditionally render AdminNavbar based on fetched userType */}
            {userData && userData.info.userType === "admin" && <AdminNavbar />}
          </ul>
        </nav>
      </div>
    </>
  )
}
