import { useParams, Link } from "react-router-dom";

const PeopleListItem = ({ peopleListItem, dataIndex }) => {
  
  return (
    <>
      <Link to={`/people/${peopleListItem.url.match(/\d{1,}/)}`} data-index={dataIndex} results={peopleListItem}>
        {peopleListItem.name}
      </Link>
    </>
  );
};

export default PeopleListItem;
