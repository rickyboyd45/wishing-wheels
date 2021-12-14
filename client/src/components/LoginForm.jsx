import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <label>Username:
        <input type='text'
          name='username'
          value={username}
          onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type='password'
          name='password'
          value={password}
          onChange={handleChange} />
      </label>
      <Link to='/signup'>Sign Up</Link>
      <button>Submit</button>
    </form>
  )
}

export default LoginForm
