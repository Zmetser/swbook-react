import List from "../components/PeopleList"
import { useEffect, useState } from 'react'
import useGetPeople from "../store/useGetPeople"

function Screen() {

    const [result, setResult] = useState([])
    const [people, getPeople] = useGetPeople()

    useEffect(() => {
        setResult(people)
    }, [people])

    useEffect(() => {
        getPeople()
    }, [])

    return (
        <div>
            <List list={result} />
        </div>
    )
}

export default Screen