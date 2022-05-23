import React from 'react'
import navItems from './NavbarItems'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo-ctn'>
            <FontAwesomeIcon icon={faCar} />
        </div>
        <ul className='navbar-items-ctn'>
            {navItems.map((item, index) => {
                return (
                    <li className={item.cName} key={index}>
                        <Link to={item.path}>{item.name}</Link>
                    </li>   
                )
            })}
        </ul>
    </div>
  )
}

export default Navbar