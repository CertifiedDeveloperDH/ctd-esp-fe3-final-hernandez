import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";

const CardDestacado = ({destacado}) => {
    let {theme} = useContext(themeContext)
    return (
        <>
        <div className={`card text-bg-${theme.opcion}`}>
            <Link to={`/dentist/${destacado.id}`}>
                <img
                className="card-img-top"
                src="./images/doctor.jpg"
                alt="doctor placeholder"
                />
                </Link>
                <div className={`card-body ${styles.CardBody}`}>
                <Link to={`/dentist/${destacado.id}`}>
                <h5 className={`card-title ${styles.title}`}>Id del dentista: {destacado.id}</h5>
                <h5 className={`card-title ${styles.title}`}>Nombre del dentista: {destacado.name}</h5>
                <h5 className={`card-title ${styles.title}`}>Usuario del dentista: {destacado.username}</h5>
                 </Link>
                </div>
      </div>
        </>
    )
}

export default CardDestacado