

function ListItem({ character }) {

    return (
        <>
            <tr>
                <td colSpan={2}><strong>{character.name}</strong></td>
            </tr>
            <tr>
                <td>Height:</td>
                <td>{character.height}</td>
            </tr>
            <tr>
                <td>Mass:</td>
                <td>{character.mass}</td>
            </tr>
        </>
    )
}

export default ListItem