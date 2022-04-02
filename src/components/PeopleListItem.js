const PeopleListItem = ({ peopleListItem, onClick, index }) => {
  return (
    <>
      <a href="#" onClick={onClick} data-index={index}>
        {peopleListItem.name}
      </a>
    </>
  );
};

export default PeopleListItem;
