import React from 'react'
import '../assets/css/NavBar.css'
import { Navbar, Nav, Container  } from 'react-bootstrap';

function Navigate(props) {
  const { currentUser, handleLogout } = props;

  return (
    <>

      <Navbar bg="light" expand="md">
  <Container>
  <Navbar.Brand href="/">
      <img
        src="https://i.imgur.com/1PZUK6e.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="wishing wheels logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            {currentUser ? (
                <div>
                <p>Welcome, {currentUser.username}</p>
                </div>
            ) : (
              <Nav.Link href="login">Login</Nav.Link>
            )}

              <Nav.Link href="/">Home</Nav.Link>
              
              <Nav.Link href="cars">Wheels</Nav.Link>

              {currentUser &&
                <Nav.Link href="cars/new">Create Post</Nav.Link>}   
              
              <Nav.Link href="about">About</Nav.Link>

              

              {currentUser ? (
                <Nav.Link onClick={handleLogout} href="/">Log Out</Nav.Link>
              ) : (
                <Nav.Link href="signup">Sign Up</Nav.Link>
              )}
              
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    </>
  )
}

export default Navigate




