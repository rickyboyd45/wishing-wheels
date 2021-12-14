import React from 'react'
import NavBar from './NavBar'


function Layout(props) {
  return (
    <>
    <header>
      <NavBar />
    </header>
    {props.children}
    </>
  )
}

export default Layout
