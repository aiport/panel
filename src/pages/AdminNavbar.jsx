import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faServer, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function AdminNavbar() {
  const location = useLocation(); // Get current URL path

  return (
    <>
      {location.pathname.startsWith('/server') ? (
        <>
          <div className="divider"></div>
          <NavLink to='/account' activeClassName="active">
            <li>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
              <div className="text">Admin</div>
            </li>
          </NavLink>
        </>
      ) : (
        <>
        <div className="divider"></div>
        <NavLink to='/account' activeClassName="active">
            <li>
              <i className="fa-duotone fa-grid-2"></i>
              <div className="text">Account</div>
            </li>
          </NavLink>
          <NavLink to='/settings' activeClassName="active">
            <li>
              <FontAwesomeIcon icon={faServer} className='icon' />
              <div className="text" style={{ width: '95%' }}>Servers</div>
            </li>
          </NavLink>
        </> 
      )}
    </>
  );
}
