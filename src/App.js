import './App.css';
import Login from './views/LoginScreen';
// import useCurrentUser from './store/useCurrentUser';
import PeopleListScreen from './views/PeopleListScreen';
import { Routes, Route } from 'react-router-dom';
import PS from './views/PeopleScreen';

function App() {
  // const [currentUser, authUser] = useCurrentUser();
  // const isLogged = Boolean(currentUser);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/people" element={<PeopleListScreen />} />
        <Route path="/people/:id" element={<PS />} />
      </Routes>
    </div>
  );
}

export default App;
