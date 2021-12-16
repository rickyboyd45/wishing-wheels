import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import '../assets/css/LoginForm.css'

function LoginForm(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='login__'>
    <div class="w-50 p-3 mb-2 bg-light text-dark border rounded">
      
      <Container >
<Form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
      }}>
        
        <Form.Group className="mb-2" controlId="formBasicUser">
            
    <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name='username'
            value={username}
            onChange={handleChange}
            placeholder="Username" />
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name='password'
            value={password}
            onChange={handleChange}
            placeholder="Password" />
        </Form.Group>
<Form.Text className="text-muted">Need a Wishing Wheels account? <Link to='/signup'>Sign Up</Link>
              <br/>
            </Form.Text>
            <div className='btn__3'>
  <Button  variant="primary" type="submit">Submit</Button></div>
      </Form>
</Container>
</div>
    </div>
  )
}

export default LoginForm
