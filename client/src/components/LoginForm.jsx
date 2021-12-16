import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'

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
    <div>
      
      <Container >
<Form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
      }}>
        
        <Form.Group className="mb-2" controlId="formBasicUser">
            <Form.Text className="text-muted">Need a Wishing Wheels account? <Link to='/signup'>Sign Up</Link>
              <br/>
    </Form.Text>
    <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name='username'
            value={username}
            onChange={handleChange}
            placeholder="Username" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name='password'
            value={password}
            onChange={handleChange}
            placeholder="Password" />
        </Form.Group>

  <Button variant="primary" type="submit">Submit</Button>
      </Form>
</Container>

    </div>
  )
}

export default LoginForm
