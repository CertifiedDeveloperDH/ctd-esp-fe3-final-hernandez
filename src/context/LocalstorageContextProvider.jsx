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
                arrayDestacados = JSON.parse(localStorage.getItem("destacados"))
                arrayDestacados.push(data)
                localStorage.clear()
                localStorage.setItem("destacados",JSON.stringify(arrayDestacados))
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