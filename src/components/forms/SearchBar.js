const SearchBar = ({ setFilteredList, peopleList }) => {
  const onChangeHandler = (event) => {
    setFilteredList(
      peopleList.filter((ppl) => {
        return ppl.name.toLowerCase().includes(event.target.value.toLowerCase());
      })
    );
  };
  return (
    <>
      <input type="search" onChange={onChangeHandler} />
    </>
  );
};
export default SearchBar;
