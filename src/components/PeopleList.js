import { useState } from 'react';
import PeopleListItem from './PeopleListItem';
import { Modal, Backdrop } from '../views/Modal';

const PeopleList = ({ results }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [person, setPerson] = useState({});

  const onClickhandler = (event) => {
    setPerson(results[Number(event.target.getAttribute('data-index'))]);
    setIsClicked(true);
  };

  const closingHandler = () => {
    setIsClicked(false);
  };
  return (
    <div>
      {isClicked && <Backdrop onClick={closingHandler} />}
      {isClicked && <Modal person={person} onClick={closingHandler} />}
      <ul>
        {results.map((peopleItem, index) => {
          return (
            <p key={`key_${index}`}>
              <PeopleListItem
                peopleListItem={peopleItem}
                onClick={onClickhandler}
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
