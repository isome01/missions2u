import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.css'

const Navbar = ({}) => {
  return (
    <nav className='missions-nav navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>Missions2U</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='nav-dropdown collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto' style={{'margin': 0, 'padding': 0}}>
          <li className='nav-item active'>
            <a className='nav-link' href='#'></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Link</a>
          </li>
          <li className='nav-item dropdown'>
            <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              Dropdown
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a className='dropdown-item' href='#'></a>
              <a className='dropdown-item' href='#'></a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item' href='#'></a>
            </div>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='#'>Disabled</a>
          </li>
          <li className='nav-item pull-right'>
            <a className='nav-link' href='#'>Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {

}

Navbar.defaultProps = {

}

export default Navbar