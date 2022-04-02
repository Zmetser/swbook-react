import "./App.css";
import { useState } from "react";
import Login from "./views/LoginScreen";
import useCurrentUser from "./store/useCurrentUser";

import PeopleList from "./components/PeopleList";
import ModalWindow from "./components/forms/ModalWindow";

function App() {
    const [currentUser, authUser] = useCurrentUser();
    const isLogged = Boolean(currentUser);
    const [currentItem, setCurrentItem] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    };
    // const modal = () => {
    //     setModalIsOpen(!modalIsOpen);
    // };

    return (
        <div className="App">
            {isLogged ? (
                <>
                    <p>Hello {currentUser.username}</p>
                    {modalIsOpen ? (
                        <ModalWindow currentItem={currentItem} closeModal={closeModal} />
                    ) : (
                        <PeopleList
                            setCurrentItem={setCurrentItem}
                            setModalIsOpen={setModalIsOpen}
                        />
                    )}
                </>
            ) : (
                <Login currentUser={currentUser} authUser={authUser} />
            )}
        </div>
    );
}

export default App;
