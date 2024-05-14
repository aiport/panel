
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faServer } from '@fortawesome/free-solid-svg-icons'
export default function AdminNavbar() {
  return (
    <>
    <div className="divider"></div>
    <NavLink to='/account' activeClassName="active">
          <li>
          <i class="fa-duotone fa-grid-2"></i>
            <div className="text">Account</div>
          </li>
          </NavLink>
          <NavLink to='/settings'  activeClassName="active">
          <li>
            <FontAwesomeIcon icon={faServer} className='icon' />
            <div className="text">Servers</div>
          </li>
          </NavLink>
    </>
  )
}