import { useEffect, useState } from 'react';
import PeopleListItem from './PeopleListItem';
import Modal from '../views/Modal';

const PeopleList = ({ results }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [person, setPerson] = useState({});

  const onCLickhandler = (event) => {
    setPerson(results[Number(event.target.getAttribute('data-index'))]);
    setIsClicked(true);
  };
  console.log(person, isClicked);
  return (
    <div>
      {isClicked && <Modal person={person} />}
      <ul>
        {results.map((peopleItem, index) => {
          return (
            <p key={`key_${index}`}>
              <PeopleListItem
                peopleListItem={peopleItem}
                onClick={onCLickhandler}
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
