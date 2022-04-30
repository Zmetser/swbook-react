import './App.css';
// import Login from './views/LoginScreen';
// import useCurrentUser from './store/useCurrentUser';
import PeopleListScreen from './views/PeopleListScreen';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './views/Login'
import { People } from './views/People'
import Peopleid from './components/newform/Peopleid';


function App() {
  // const [currentUser, authUser] = useCurrentUser();
  // const isLogged = Boolean(currentUser);

  return (
    <div className="App">

      <Link to="/login">Login</Link>
      <Link to="/people">People</Link>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<Peopleid/>} />
      </Routes>
      {/* {isLogged ? (
        <p>Hello {currentUser.username}</p>
      ) : (
        <Login currentUser={currentUser} authUser={authUser} /> */}
      {/* <PeopleListScreen /> */}
      {/* )} */}
    </div>
  );
}

export default App;
