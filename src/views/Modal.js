const Modal = ({ person }) => {
  return (
    <div className="modal">
      <h2>Name:{person.name}</h2>
      <p>Homeworld:{person.homeworld}</p>
      <p>Gender:{person.gender}</p>
      <p>Height:{person.height}</p>
      <p>Birth Year:{person.birth_year}</p>
    </div>
  );
};

export default Modal;
