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
            return {...state,
                opcion: action.payload
            }
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