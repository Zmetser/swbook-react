import { getAPI } from '../utils/fetch_methods';
import { useState, useEffect } from 'react';
import PeopleList from '../components/PeopleList';

const PeopleListScreen = () => {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    getAPI('https://swapi.dev/api', 'people', (value) => setPeopleList(value.results));
  }, []);

  return <>{<PeopleList results={peopleList} />}</>;
};

export default PeopleListScreen;
