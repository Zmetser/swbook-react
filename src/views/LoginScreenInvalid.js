import users from '../store/users';
import { useState } from 'react';

const Login = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.elements[0];
    const pass = form.elements[1];
    users.forEach((user) => {
      if (
        username.value.toLowerCase() === user.username.toLowerCase() &&
        pass.value === user.password
      ) {
        console.log('U IN');
      }
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          Username:
          <input type="text" id="username" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="text" id="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
