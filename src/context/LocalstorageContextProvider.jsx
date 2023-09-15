import { useReducer } from "react"
import {localstorageContext} from './localstorageContext.jsx'
import reducer from "../reducer/reducer.js"

const LocalstorageContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, "")
    const addFav = async (identificador) => {
            let arrayDestacados = []
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${identificador}`
            );
            const data = await response.json();
            
            console.log(data)
            if (!localStorage.getItem("destacados")){
                arrayDestacados.push(data)
                localStorage.setItem("destacados", JSON.stringify(arrayDestacados))
            } else {
                /*let destacados = JSON.parse(localStorage.getItem("destacados"))
                let repetido = destacados.map((destacado)=> {
                    console.log(destacado["id"])
                    return destacado["id"] == identificador ? true : false
                })
                console.log(repetido)*/
                let repetido = false
                if (!repetido){
                    arrayDestacados = JSON.parse(localStorage.getItem("destacados"))
                    arrayDestacados.push(data)
                    localStorage.clear()
                    localStorage.setItem("destacados",JSON.stringify(arrayDestacados))
                } else {
                    alert("Dentista ya en destacados")
                }
                
            }
            return dispatch({type:"addFav"})
          };
    return (
        <localstorageContext.Provider value={{state, addFav}}>
            {children}
        </localstorageContext.Provider>
    )
}
export default LocalstorageContextProvider