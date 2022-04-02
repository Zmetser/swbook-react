import './App.css';
import Login from './views/LoginScreen';
import useCurrentUser from './store/useCurrentUser';
import Screen from './views/PeopleListScreen';

function App() {
  const [currentUser, authUser] = useCurrentUser();
  const isLogged = Boolean(currentUser);

  return (
    <div className="App">
      {isLogged ? <Screen /> : (
        <Login
          currentUser={currentUser}
          authUser={authUser}
        />
      )}
    </div>
  );
}

export default App;
