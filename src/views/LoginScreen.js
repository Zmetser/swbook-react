import users from '../store/users';
import { useState, useRef, useEffect } from 'react';

const Login = () => {
  const inputRef = useRef();   // { current: #ref } < Csak a refet dobja ki
  const [inputValue, setInputValue] = useState({ username: '', password: '' });

  // Focus username on initial render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
          <input type="text" id="username" ref={inputRef} onChange={onChangeHandler} />
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
