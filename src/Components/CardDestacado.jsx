const CardDestacado = ({destacado}) => {
    return (
        <>
        <ul>
            <li>{destacado.id}</li>
            <li>{destacado.name}</li>
            <li>{destacado.username}</li>
        </ul>
        </>
    )
}

export default CardDestacado