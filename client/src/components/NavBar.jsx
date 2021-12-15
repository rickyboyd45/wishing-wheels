import React from 'react'
import '../assets/css/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
  const { currentUser, handleLogout } = props;

  return (
    <>
      <nav className='navcontainer'>
        <div className=''>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className='nav__logo'>
              <img className='nav__logo__img' src="https://i.imgur.com/1PZUK6e.png" alt="Logo" width="80" height="80" />
              <h4 className='nav__left'>Wishing Wheels</h4>
            </div>
          </Link> 
        </div>
      

      <div className='nav__right'>
        <ul className='nav__ul'></ul>          
        <li>
            {
              currentUser ? (
                <div>
                <p>Welcome, {currentUser.username}</p>
                </div>
            ) : (
              <Link to="/login" ><p>Login</p></Link>
            )}
        </li>
          <li>
            {currentUser &&
        <Link to="/cars/new" ><p>Create Post</p></Link>}
        </li>

        <li>
        <Link to="/about" ><p>About</p></Link>
          </li>
          
        <li>
        <Link to="/cars" ><p>Wheels</p></Link>
        </li>

          <li>
            {
              currentUser ? (
                <div>
                  <button className='logout__btn' onClick={handleLogout}>Log Out</button>
                </div>
              ) : (
                <Link to="/signup" ><p>Sign Up</p></Link>
              )}
        </li>

        </div>
      </nav>
    </>
  )
}

export default NavBar


