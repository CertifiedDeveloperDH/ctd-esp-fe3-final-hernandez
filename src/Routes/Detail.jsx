import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { dentistContext } from '../context/apiContext.jsx'
const Detail = () => {
    let params = useParams()
    let {state, fetchDentist} = useContext(dentistContext)
    const [datos, setDatos] = useState({})
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
    console.log(state.data)
    console.log(datos)
    return(
        <>
        <h1>Detail Dentist {params.id} </h1>
        <ul>
            <li>{datos && datos.name}</li>
            <li>{datos && datos.email}</li>
            <li>{datos && datos.phone}</li>
            <li>{datos && datos.website}</li>
        </ul>
        </>
    )
}
export default Detail