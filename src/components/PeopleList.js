import { useState } from "react";
import PeopleListItem from "./PeopleListItem";
import { Modal, Backdrop } from "../views/Modal";

/*------STYLE-------*/
import styled from "styled-components";
/*-----------------*/

const ListItem = styled.button`
  border: 1px solid black;
  display: block;
  border-radius: 10px;
  padding: 0.5rem;
  margin-bottom: 0.3rem;
  


  a {
    text-decoration: none;
    transition: 1.3s;
    transform: scale(0);
  }

  &:hover {
    background-color: blue;
    transform: scale(1.2);
    box-shadow: 2px 5px 10px blueviolet;
    transition: 1.3s;
    a {
      color: white;
    }
  }
`;

const PeopleList = ({ results }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [person, setPerson] = useState({});

  const onClickhandler = (event) => {
    setPerson(results[Number(event.target.getAttribute("data-index"))]);
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
            <ListItem key={`key_${index}`}>
              <PeopleListItem
                peopleListItem={peopleItem}
                onClick={onClickhandler}
                dataIndex={index}
              />
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default PeopleList;

// event.target.dataset.index  || event.target.getAttribute('data-index')
