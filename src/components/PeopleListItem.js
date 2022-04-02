const PeopleListItem = ({ peopleListItem, onClick, dataIndex }) => {
  return (
    <>
      <a href="#" onClick={onClick} data-index={dataIndex}>
        {peopleListItem.name}
      </a>
    </>
  );
};

export default PeopleListItem;
