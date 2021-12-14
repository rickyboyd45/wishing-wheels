import React from 'react'
import NavBar from './NavBar'


function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    
    <>
    <header>
        <NavBar currentUser={currentUser} handleLogout={handleLogout}/>
    </header>
    {props.children}
    </>
  )
}

export default Layout
