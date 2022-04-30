import { getAPI } from '../utils/fetch_methods';
import { useState, useEffect } from 'react';
import PeopleList from '../components/PeopleList';
import SearchBar from '../components/forms/SearchBar';
import Loading from '../components/Loading';

const PeopleListScreen = () => {
  const [peopleList, setPeopleList] = useState(null);
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
      {peopleList ? <PeopleList results={filteredList} /> : <Loading />}
    </>
  );
};

export default PeopleListScreen;
