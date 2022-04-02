import { useState, useEffect } from "react"
import ListItem from "./PeopleListItem"

function List({ list }) {

    const [included, setIncluded] = useState('')
    const [clicked, setClicked] = useState()

    const clickHandler = (event) => {
        setClicked(prev => {
            if (prev === event.target.innerText) {
                return null
            }
            else {
                return event.target.innerText
            }
        })
    }

    const changeHandler = (event) => {
        setIncluded(event.target.value)
    }

    return (
        <>
            <form>
                <input type='text' onChange={changeHandler} className="inp" placeholder="Search" />
            </form>
            <table className="listtable">
                {list.map((item, index) => {
                    if (item.name.toLowerCase().includes(included)) {
                        return <ListItem character={item} key={index} clickHandler={clickHandler} clicked={clicked === item.name} cname="active" />
                    }
                })}
            </table>
        </>
    )
}

export default List