import PeopleListItem from "./PeopleListItem";
import useSwapi from "../store/useSwapi";
import { useEffect, useState } from "react";

const PeopleList = ({setCurrentItem, setModalIsOpen}) => {
    const database = useSwapi();
    const [result, setResult] = useState(database);
  

    useEffect(() => {
        setResult(database);
    }, [database])

    const changeHandler = (event) => {
        const input = event.target.value.toLowerCase();
        const newArr = database.filter((item) => {
            return item.name.toLowerCase().includes(input);
        });

        console.log(database);
        setResult(newArr);
    };

    const onClickHandler = (event) => {
        database.find((item) => {
            if(item.name === event.target.innerText) {
            console.log(item);
            setCurrentItem(item);
            setModalIsOpen(true);
            return item;
        }
        })
    }

    return (
        <>
            <input name="filter" onChange={changeHandler}></input>
            {result.map((item, index) => {
                return <PeopleListItem item={item} key={`item_${index}`} onClickHandler={ onClickHandler }/>;
            })}
        </>
    );
};

export default PeopleList;
