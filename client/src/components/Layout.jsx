import React from 'react'
import NavBar from './NavBar'


function Layout(props) {
  const { currentUser } = props;

  return (
    
    <>
    <header>
        <NavBar currentUser={currentUser}/>
    </header>
    {props.children}
    </>
  )
}

export default Layout
