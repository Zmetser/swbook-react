const Modal = ({ person, onClick }) => {
  return (
    <div className="modal" onClick={onClick}>
      <h2>Name:{person.name}</h2>
      <p>Birth Year:{person.birth_year}</p>
      <p>Gender:{person.gender}</p>
      <p>Height:{person.height}</p>
      <p>Homeworld:{person.homeworld}</p>
    </div>
  );
};

const Backdrop = (props) => {
  return (
    <div className="backdrop" onClick={props.closingHandler}>
      {props.children}
    </div>
  );
};

export { Modal, Backdrop };
