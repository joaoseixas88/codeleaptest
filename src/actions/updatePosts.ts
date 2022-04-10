import { api } from "../services/api"
import { Dispatch } from 'redux';


interface UpdateProps{
    id: number;
    post:{
        title: string;
        content: string
    }
    
}


export const actionTypes = {
    FETCH_STARTED: 'FETCH_STARTED',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR',    
}



export const removePost = (payload: number) => ({type: actionTypes.FETCH_ERROR, payload})



export function getData(){
    return async (dispatch: Dispatch) => {
        try {
            dispatch({type: actionTypes.FETCH_STARTED})           
            const data = await api.get("/").then(response => response.data.results)
            dispatch({type: actionTypes.FETCH_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: actionTypes.FETCH_ERROR, payload: error})
            
        }
    }

}



export function updatePost({id, post}: UpdateProps){
    return async(dispatch: Dispatch) =>{
        try {
            dispatch({type: actionTypes.FETCH_STARTED}) 
            await api.patch(`/${id}/`,post)
            const data = await api.get("/").then(response => response.data.results)
            dispatch({type: actionTypes.FETCH_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: actionTypes.FETCH_ERROR, payload: error})
        }
    }
}


export function deletePost(id: number){
    return async(dispatch: Dispatch) =>{
        try {
            dispatch({type: actionTypes.FETCH_STARTED})
            await api.delete(`/${id}/`) 
            const data = await api.get("/").then(response => response.data.results)
            dispatch({type: actionTypes.FETCH_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: actionTypes.FETCH_ERROR, payload: error})
            
        }
    }
}