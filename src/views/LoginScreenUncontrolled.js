import users from '../store/users';
import { createRef, useEffect } from 'react';

const Login = () => {
  const usernameRef = createRef();
  const passwordRef = createRef();

  const submitHandler = (event) => {
    event.preventDefault();
    users.forEach((user) => {
      if (
        usernameRef.current.value.toLowerCase() === user.username.toLowerCase() &&
        passwordRef.current.value === user.password
      ) {
        console.log('U IN');
      }
    });
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, [usernameRef])

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          Username:
          <input type="text" ref={usernameRef} id="username" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="text" ref={passwordRef} id="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
