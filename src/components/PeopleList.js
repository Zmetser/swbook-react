import PeopleListItem from "./PeopleListItem";
import useSwapi from "../store/useSwapi";
import { useEffect, useState } from "react";

const PeopleList = () => {
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

        setResult(newArr);
    };

    return (
        <>
            <input name="filter" onChange={changeHandler}></input>
            {result.map((item, index) => {
                return <PeopleListItem item={item} key={`item_${index}`} />;
            })}
        </>
    );
};

export default PeopleList;
