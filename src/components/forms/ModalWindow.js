const ModalWindow = ({ currentItem, closeModal }) => {


    return (
        <>
            <div className="modal-window">
                <div>Name: {currentItem.name}</div>
                <div>Height: {currentItem.height}</div>
                <div>Mass: {currentItem.mass}</div>
                <div>Birth Year: {currentItem.birth_year}</div>
                <button typeof="button" onClick={closeModal}>
                    Close
                </button>
            </div>
        </>
    );
};

export default ModalWindow;
