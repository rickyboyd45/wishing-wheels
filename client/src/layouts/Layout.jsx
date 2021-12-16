import React from 'react'
import Navigate from '../components/NavBar';
import '../assets/css/Layout.css'


function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <>
    <header className='header'>
        <Navigate currentUser={currentUser} handleLogout={handleLogout}/>
      </header>
      
      {props.children}

      <footer className='footer'>
        <p>&copy; Ricky Boyd 2021</p>
      </footer>
    </>
  )
}

export default Layout
