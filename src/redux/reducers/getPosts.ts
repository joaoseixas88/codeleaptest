
import { actionTypes } from '../../actions/updatePosts'


const initialState = {
    loading: false,
    data: [],
    error: null
}


function reducer(state = initialState, action: any){

    switch(action.type){
        case actionTypes.FETCH_STARTED :
            return {...state, loading: true}
        case actionTypes.FETCH_SUCCESS :
            return {data: action.payload, loading: false, error: null}
        case actionTypes.FETCH_ERROR:
            return {...state, data: null, loading: false, error: action.payload}
        default:
            return state
    }

}

export default reducer

