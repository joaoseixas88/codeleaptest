import { AnyAction } from 'redux'
import { actionTypes } from '../../actions/auth.actions'



const initialState = ''



const reducer = (state = initialState, action: any) => {
    
    switch(action.type){
        case actionTypes.LOGIN:
            let newState = action.payload
            return state = newState
        case actionTypes.LOGOUT:
            return state = ''
        default: 
            return state
    }
}


export default reducer