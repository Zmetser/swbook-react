import users from '../store/users';
import { useState } from 'react';

const Login = () => {
  const [inputValue, setInputValue] = useState({ username: '', password: '' });

  const submitHandler = (event) => {
    event.preventDefault();
    users.forEach((user) => {
      if (
        inputValue.username.toLowerCase() === user.username.toLowerCase() &&
        inputValue.password === user.password
      ) {
        console.log('U IN');
      }
    });
  };

  const onChangeHandler = (event) => {
    setInputValue((prev) => ({ ...prev, [event.target.id]: event.target.value }));

    // if (event.target.id === 'username') {
    //   setInputValue((prev) => ({ ...prev,  [event.target.id]: event.target.value }));
    // }
    // if (event.target.id === 'password') {
    //   setInputValue((prev) => ({ ...prev, password: event.target.value }));
    //   setInputValue((prev) => {
    //     const newObj = { ...prev };
    //     newObj.password = event.target.value;
    //     return newObj;
    //   });
    // }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          Username:
          <input type="text" id="username" onChange={onChangeHandler} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="text" id="password" onChange={onChangeHandler} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
