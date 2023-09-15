import { useContext } from "react";
import {Link} from "react-router-dom" 
import {localstorageContext} from '../context/localstorageContext.jsx'
import styles from "./Card.module.css";

const Card = ({id, name, username}) => {
    let {state, addFav} = useContext(localstorageContext)
    let {theme} = "light"
    return (
        <>
        <div className={`card text-bg-${theme}`}>
        <Link to={`/dentist/${id}`}>
        <img
          className="card-img-top"
          src="./images/doctor.jpg"
          alt="doctor placeholder"
        />
        </Link>
        <div className={`card-body ${styles.CardBody}`}>
          <Link to={`/dentist/${id}`}>
            <h5 className={`card-title ${styles.title}`}>Nombre: {name}</h5>
            <h5 className={`card-title ${styles.title}`}>Usuario: {username}</h5>
          </Link>
        </div>
        <button type="button" className= {`btn btn-${theme} ${styles.favButton}`} onClick={()=> addFav(id)}>Add fav</button>
      </div>
        </>
    )
}

export default Card