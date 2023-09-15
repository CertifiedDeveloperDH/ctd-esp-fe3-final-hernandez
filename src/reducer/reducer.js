function reducer(state, action){
    
    switch (action.type){
        case 'fetchApi':
            return {...state,
                data: action.payload, 
                loading:false,
            }
        case 'fetchDentist':
            return {...state,
            data: action.payload,
            loading:false,
        }
        case 'changeTheme':
            if (state === "light"){
                state = "dark"
            } else if (state === "dark"){
                state = "light"
            }
            return state
        case 'addFav':
            return {...state,
                data: action.payload, 
            }
            
            return state
        default:
            return state
    }
}
export default reducer;