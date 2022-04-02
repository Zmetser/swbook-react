import { useState, useEffect } from "react"
import ListItem from "./PeopleListItem"

function List({ list }) {

    const [included, setIncluded] = useState('')

    const changeHandler = (event) => {
        setIncluded(event.target.value)
    }

    return (
        <>
            <table className="listtable">
                {list.map((item, index) => {
                    if(item.name.toLowerCase().includes(included)){
                        return <ListItem character={item} key={index} />
                    }
                })}
            </table>
            <form>
                <input type='text' onChange={changeHandler} />
            </form>
        </>
    )
}

export default List