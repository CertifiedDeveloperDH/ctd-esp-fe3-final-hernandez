import { useReducer } from "react"
import  {apiContext, dentistContext}  from './apiContext.jsx'
import reducer from "../reducer/reducer.js"
import { createContext } from "react";

const ApiContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, [])
    const fetchApi = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data)
        return dispatch({type:"fetchApi", payload:data, loading:true})
    };
    const fetchDentist = async (identificador) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${identificador}`
        );
        const data = await response.json();
        console.log(data)
        return dispatch({type:"fetchDentist", payload:data, loading:true})
    }
    return (
        <apiContext.Provider value={{state, fetchApi}}>
            <dentistContext.Provider value={{state, fetchDentist}}>
            {children}
            </dentistContext.Provider>
        </apiContext.Provider>
    )
}
export default ApiContextProvider