import { Link } from 'react-router-dom'
import React from 'react'
import NavBar from './NavBar'


function Layout(props) {
  const { currentUser } = props;

  return (
    
    <>
    <header>
        <NavBar />

      {currentUser ? (
          <div>something</div>
        ) : (
        <Link to='/login'>Login</Link>
      )}
    </header>
    {props.children}
    </>
  )
}

export default Layout
