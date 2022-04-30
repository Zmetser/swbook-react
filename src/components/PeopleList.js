import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PeopleListItem from './PeopleListItem';

const PeopleList = ({ results }) => {
  // const [person, setPerson] = useState({});

  const navTo = useNavigate();

  return (
    <div>
      <ul>
        {results.map((peopleItem, index) => {
          return (
            <p key={`key_${index}`}>
              <PeopleListItem
                peopleListItem={peopleItem}
                onClick={() => {
                  navTo(`/people/${peopleItem.url.match(/\d{1,}/)[0]}`);
                }}
                dataIndex={index}
              />
            </p>
          );
        })}
      </ul>
    </div>
  );
};

export default PeopleList;

// event.target.dataset.index  || event.target.getAttribute('data-index')
