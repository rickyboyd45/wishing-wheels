import React from 'react'
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'

function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;
  const { handleRegister } = props;

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
            handleRegister(formData);
          }}>
              
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder="Email" />
                  </Form.Group>
                
              <Form.Group className="mb-5" controlId="formBasicUser__2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name='username'
                  value={username}
                  onChange={handleChange}
                  placeholder="Username" />
              </Form.Group>

              <Form.Group className="mb-6" controlId="formBasicPassword__2">
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

export default SignUp
