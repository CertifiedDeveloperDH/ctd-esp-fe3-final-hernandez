import { useState , useEffect, useContext, useCallback} from "react";
import Card from "../Components/Card.jsx"
import {apiContext} from '../context/apiContext.jsx'
const Home = () => {
    let {state, fetchApi} = useContext(apiContext)
    const [datos, setDatos] = useState([])
    const retreiveData = useCallback(async () => {
        const data = await fetchApi()
        return data
    }, [])
    useEffect(()=>{
        retreiveData()
        if (state.data){
            setDatos(state.data)
        }
    }, [state.data])
    return (
        <>
        <h1>Home</h1>
        <div className= "card-grid container">
            {datos && datos.map((dentista)=>{
                return (
                    <Card key={dentista.id} id={dentista.id} name={dentista.name} username={dentista.username}/>
                )
                
                })}
        </div>
        </>
    )
}

export default Home