import { useContext } from "react";
import {Link} from "react-router-dom" 
import {localstorageContext} from '../context/localstorageContext.jsx'
const Card = ({id, name, username}) => {
    let {state, addFav} = useContext(localstorageContext)
    return (
        <>
        <Link to={`/dentist/${id}`}>
        <ul>
            <li>{id}</li>
            <li>{name}</li>
            <li>{username}</li>
        </ul>
        </Link>
        <button onClick={() => addFav(id)}>Add fav</button>
        </>
    )
}

export default Card