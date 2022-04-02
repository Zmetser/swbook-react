

function ListItem({ character, clickHandler, clicked, cname }) {

    return (
        <>
            <tr className={clicked && cname}>
                <td colSpan={2}><a href='#' onClick={clickHandler}>{character.name}</a></td>
            </tr>
            {clicked && (
                <>
                    <tr className={clicked && cname}>
                        <td>Height:</td>
                        <td>{character.height}</td>
                    </tr>
                    <tr className={clicked && cname}>
                        <td>Mass:</td>
                        <td>{character.mass}</td>
                    </tr>
                    <tr className={clicked && cname}>
                        <td>Gender:</td>
                        <td>{character.gender}</td>
                    </tr>
                    <tr className={clicked && cname}>
                        <td>Skin color:</td>
                        <td>{character.skin_color}</td>
                    </tr>
                </>
            )}
        </>
    )
}

export default ListItem