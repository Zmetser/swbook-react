import { getAPI } from '../utils/fetch_methods';
import { useState, useEffect } from 'react';
import PeopleList from '../components/PeopleList';
import SearchBar from '../components/forms/SearchBar';

const PeopleListScreen = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    getAPI('https://swapi.dev/api', 'people', (value) => {
      setPeopleList(value.results);
      setFilteredList(value.results);
    });
  }, []);
  return (
    <>
      <SearchBar setFilteredList={setFilteredList} peopleList={peopleList} />
      <PeopleList results={filteredList} />
    </>
  );
};

export default PeopleListScreen;
