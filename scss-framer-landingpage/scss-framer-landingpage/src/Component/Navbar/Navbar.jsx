import React from 'react'
import logo from '../../images/logo.png'
import './Navbar.scss'


function Navbar() {
    return (
        <div className='section'>
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <ul className='menu'>
                <li><a>Blog</a></li>
                <li><a>FAQ</a></li>
                <li><a>Signup</a></li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar
