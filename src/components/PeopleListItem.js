const PeopleListItem = ({ item, onClickHandler }) => {
    return (
        <div onClick={onClickHandler}>{item.name}</div>
    )
}

export default PeopleListItem;