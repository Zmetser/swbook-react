import users from '../store/users';
import { useState, useMemo, useCallback } from 'react';

const Login = () => {
  console.log('Re-render Login component')
  // Controlled Input
  const [inputValue, setInputValue] = useState({ username: 'inital', password: '' });

  // Egyszer fut le az elso renderkor
  // https://reactjs.org/docs/hooks-reference.html#usememo
  const random = useMemo(() => Math.random(), []);

  // Lefut az elso renderkor es utana csak akkor ha valtozik az inputValue.username
  const usernameRandom = useMemo(() => {
    return `${Math.random()}(${inputValue.username})`
  }, [inputValue.username]);

  // Valtozik ha valtozik az inputValue
  // https://reactjs.org/docs/hooks-reference.html#usecallback
  const submitHandler = useCallback((event) => {
    event.preventDefault();
    users.forEach((user) => {
      if (
        inputValue.username.toLowerCase() === user.username.toLowerCase() &&
        inputValue.password === user.password
      ) {
        console.log('U IN');
      }
    });
  }, [inputValue]);

  // Nem valtozik soha
  // https://reactjs.org/docs/hooks-reference.html#usecallback
  const onChangeHandler = useCallback((event) => {
    console.log(event.target.id, "changed to", event.target.value)
    setInputValue((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  }, []);

  /**
   * Fun fact
   * A useMemo(() => fn(), []) ugyan az, mint a useCallback(fn, [])
   */

  return (
    <div>
      <h1>Nem valtozik: {random}</h1>
      <h1>Valtozik ha valtozik a username: {usernameRandom}</h1>
      <h2>{inputValue.username}</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          Username:
          <input type="text" id="username" value={inputValue.username} onChange={onChangeHandler} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="text" id="password" value={inputValue.password} onChange={onChangeHandler} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
