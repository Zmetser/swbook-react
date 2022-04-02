import { useState, useCallback } from 'react'
import getResults from "../store/useSwapi"

export default function useGetPeople() {
    const [people, setPeople] = useState([])

    const getPeople = useCallback(() => {
        getResults('https://swapi.dev/api/people', value => setPeople(value))
    }, []);

      return [people, getPeople]
}