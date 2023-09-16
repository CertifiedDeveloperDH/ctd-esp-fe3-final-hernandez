import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { dentistContext } from '../context/apiContext.jsx'
import styles from "../Components/DetailCard.module.css"
import { themeContext } from '../context/themeContext.jsx'

const Detail = () => {
    let params = useParams()
    let {state, fetchDentist} = useContext(dentistContext)
    const [datos, setDatos] = useState({})
    let {theme, changeTheme} = useContext(themeContext)

    const retreiveDentist = useCallback(async () => {
        const data = await fetchDentist(params.id)
        return data
    }, [])
    useEffect(()=>{
        retreiveDentist()
        if (state.data){
            setDatos(state.data)
        }
    },[state.data])
    return(
        <>
        <h1>Detail Dentist {params.id} </h1>
        <section className={`card ${theme.opcion == "dark" ? "text-white" : ""} bg-${theme.opcion} col-sm-12 col-lg-6 container`}>
            <div
            className={`card-body row`}
            >
            <div className="col-sm-12 col-lg-6">
                <img
                className="card-img-top"
                src="./images/doctor.jpg"
                alt="doctor placeholder"
                />
            </div>
            <div className="col-sm-12 col-lg-6">
                <ul className="list-group">
                <li className="list-group-item">Nombre: {datos && datos.name}</li>
                <li className="list-group-item">Email: {datos && datos.email}</li>
                <li className="list-group-item">Teléfono: {datos && datos.phone}</li>
                <li className="list-group-item">Sitio web: {datos && datos.website}</li>
                </ul>
            </div>
            </div>
        </section>
        </>
    )
}
export default Detail