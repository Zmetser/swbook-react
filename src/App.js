import './App.css';
import Login from './views/LoginScreen';
import useCurrentUser from './store/useCurrentUser';

function App() {
  const [currentUser, authUser] = useCurrentUser();
  const isLogged = Boolean(currentUser);

  return (
    <div className="App">
      {isLogged ? <p>Hello {currentUser.username}</p> : (
        <Login
          currentUser={currentUser}
          authUser={authUser}
        />
      )}
    </div>
  );
}

export default App;
