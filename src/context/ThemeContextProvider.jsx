import { useMemo, useReducer } from "react"
import  {themeContext} from './themeContext.jsx'
import reducer from "../reducer/reducer.js"

const ThemeContextProvider = ({children}) => {
    const [theme, dispatch] = useReducer(reducer, "light")
    const changeTheme = () => dispatch({type: "changeTheme"})
    //const providerValue = useMemo(() => ({theme, changeTheme}), [theme, changeTheme])
    return (
        <themeContext.Provider value={{theme, changeTheme}}>
            {children}
        </themeContext.Provider>
    )
}
export default ThemeContextProvider