import { useMemo, useReducer } from "react"
import  {themeContext} from './themeContext.jsx'
import reducer from "../reducer/reducer.js"

const ThemeContextProvider = ({children}) => {
    const [theme, dispatch] = useReducer(reducer, {opcion:"light"})
    const changeTheme = () => {
        if (theme.opcion == "light"){
            return dispatch({type: "changeTheme", payload:"dark"})
        } else if (theme.opcion == "dark"){
            dispatch({type: "changeTheme", payload:"light"})
        }
    }
    //const providerValue = useMemo(() => ({theme, changeTheme}), [theme, changeTheme])
    return (
        <themeContext.Provider value={{theme, changeTheme}}>
            {children}
        </themeContext.Provider>
    )
}
export default ThemeContextProvider