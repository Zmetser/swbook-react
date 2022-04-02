import "./App.css";
import { useState } from "react";
import Login from "./views/LoginScreen";
import useCurrentUser from "./store/useCurrentUser";

import PeopleList from "./components/PeopleList";

function App() {
    const [currentUser, authUser] = useCurrentUser();
    const isLogged = Boolean(currentUser);

    return (
        <div className="App">
            {isLogged ? (
                <>
                    <p>Hello {currentUser.username}</p>
                    <PeopleList />
                </>
            ) : (
                <Login currentUser={currentUser} authUser={authUser} />
            )}
        </div>
    );
}

export default App;
