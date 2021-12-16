import React from 'react'
import Navigate from '../components/NavBar';


function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    
    <>
    <header>
        <Navigate currentUser={currentUser} handleLogout={handleLogout}/>
    </header>
    {props.children}
    </>
  )
}

export default Layout
