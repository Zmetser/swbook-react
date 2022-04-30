import styled from 'styled-components';

const Link = styled.a`
  display: inline-block;
  text-align: left;
  border: 1px dashed gray;
  width: 400px;
  padding: 0.5em;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: hotpink;
  }
`;

const PeopleListItem = ({ peopleListItem, onClick, dataIndex }) => {
  return (
    <>
      <Link href="#" onClick={onClick} data-index={dataIndex}>
        {peopleListItem.name}
      </Link>
    </>
  );
};

export default PeopleListItem;
