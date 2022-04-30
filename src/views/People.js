import React from "react";
import { getAPI } from "../utils/fetch_methods";
import { useState, useEffect } from "react";
import PeopleList from "../components/PeopleList";
import SearchBar from "../components/forms/SearchBar";
import { useParams, Link } from "react-router-dom";

/*------STYLE-------*/
import styled from "styled-components";
/*-----------------*/

const ContainerAnimation = styled.div``;

export function People() {
  const [peopleList, setPeopleList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    getAPI("https://swapi.dev/api", "people", (value) => {
      setPeopleList(value.results);
      setFilteredList(value.results);
    });
  }, []);
  return (
    <>
      <SearchBar setFilteredList={setFilteredList} peopleList={peopleList} />
      {peopleList.length == 0 && <ContainerAnimation>Loading</ContainerAnimation>}
      <PeopleList results={filteredList} />
    </>
  );
}
