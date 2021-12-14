import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData);
    }}>
      <label>Username:
        <input type='text'
          name='username'
          value={username}
          onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type='text'
          name='email'
          value={email}
          onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type='password'
          name='password'
          value={password}
          onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default SignUp
