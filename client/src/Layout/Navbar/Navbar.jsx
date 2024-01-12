import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
    <div className='nav_container'>
      <h2 className='logo'>Nitro <span>.</span></h2>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/add'>Add</Link></li>
        <li><Link to='/wish'>Wishlist</Link></li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar
