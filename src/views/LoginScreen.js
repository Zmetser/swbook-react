import { useState, useRef, useEffect , useCallback } from 'react';

const Login = ({ authUser, currentUser }) => {
  const inputRef = useRef(); // { current: #ref } < Csak a refet dobja ki
  const [inputValue, setInputValue] = useState({ username: '', password: '' });

  const [isTried, setIsTried] = useState(false);

  // Focus username on initial render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = useCallback((event) => {
    event.preventDefault();
    setIsTried(true)

    authUser(inputValue.username.toLowerCase(), inputValue.password);
  }, [inputValue, authUser]);

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
      {(!currentUser && isTried ) && <p>Nem jó a jelszó.</p>}
      {currentUser && <p>Szia {currentUser.username}!</p>}
      <form onSubmit={submitHandler} className="form-container">
        <label htmlFor="username">
          Username:
          <input type="text" id="username" ref={inputRef} onChange={onChangeHandler} />
        </label>
        <br/>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" onChange={onChangeHandler} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
