import { useState, useEffect } from "react";

const useSwapi = () => {
    const swURL = "https://swapi.dev/api/people/";
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        fetch(swURL)
            .then((data) => data.json())
            .then((list) => setDatabase(list.results));
    }, [])

    return database;
};

export default useSwapi;
