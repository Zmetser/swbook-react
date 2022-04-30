import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getAPI } from '../../utils/fetch_methods';
import PeopleListItem from "../PeopleListItem";


const Peopleid = ({ results }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [person, setPerson] = useState({});
  const { id } = useParams();

  /*const onClickhandler = (event) => {
    setPerson(results[Number(event.target.getAttribute("data-index"))]);
    setIsClicked(true);
  };

  const closingHandler = () => {
    setIsClicked(false);
  };*/

  useEffect(() => {
    getAPI('https://swapi.dev/api', `people/${id}`, (value) => {
      setPerson(value);
      
    });
  }, []);

  return (
    <div className="modal">
      <h2>Name:{person.name}</h2>
      <p>Birth Year:{person.birth_year}</p>
      <p>Gender:{person.gender}</p>
      <p>Height:{person.height}</p>
      <p>Homeworld:{person.homeworld}</p>
    </div>
  );
};

export default Peopleid;
