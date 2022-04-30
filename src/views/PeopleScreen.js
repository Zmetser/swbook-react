import { getAPI } from '../utils/fetch_methods';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 30vh;
  left: 30%;
  width: 40%;
  z-index: 100;
  background-color: lightskyblue;
  width: 40vw;
  height: 40vh;
  overflow: hidden;
  border: 1px solid rgb(6, 59, 92);
  text-align: center;
`;

const HTwoDTwo = styled.h2`
  width: 60%;
  background-color: whitesmoke;
  text-decoration: underline;
  margin: 3rem auto;
`;

const Pek = styled.p``;

const PS = ({ person }) => {
  const { id } = useParams();
  const [chosenOne, setChosenOne] = useState({});
  useEffect(() => {
    getAPI('https://swapi.dev/api/people', `${id}`, (value) => {
      console.log(value);
      setChosenOne(value);
    });
  }, [id]);

  return (
    <Container>
      <HTwoDTwo>Name: {chosenOne.name}</HTwoDTwo>
      <p>Birth Year: {chosenOne.birth_year}</p>
      <p>Gender: {chosenOne.gender}</p>
      <p>Height: {chosenOne.height}</p>
      <p>Homeworld: {chosenOne.homeworld}</p>
    </Container>
  );
};

export default PS;
