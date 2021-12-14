import React from 'react'
import '../assets/css/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {

  return (
    <>

      <nav className='navcontainer'>
        <div className=''>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className='nav__logo'>
              <img className='nav__logo__img' src="https://i.imgur.com/1PZUK6e.png" alt="Logo" width="40" height="40" />
            </div>
            <h4 className='nav__left'>Wishing Wheels</h4>
          </Link>
        </div>
      </nav>

      <div className="nav__right">
        <ul className='nav__ul'></ul>
        <li>
        <Link to="/create" ><p>Create Post</p></Link>
        </li>

        <li>
        <Link to="/about" ><p>About</p></Link>
        </li>

        <li>
        <Link to="/login" ><p>Login</p></Link>
        </li>

        <li>
        <Link to="/sign-up" ><p>Sign Up</p></Link>
        </li>

        </div>
    </>
  )
}

export default NavBar


