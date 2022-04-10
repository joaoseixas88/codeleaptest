import { Dispatch } from "redux";

;


interface action{
    type: string;
    payload: string
}

export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: "LOGOUT",
    LOGIN_FAILED: "LOGIN_FAILED"
}

export const storageKey = 'codeleap:username'


// export const login = (payload: string) => ({type: actionTypes.LOGIN, payload})
export const logout = () => ({type: actionTypes.LOGOUT})


export function login(username: string){

    return async(dispatch: Dispatch) => {
        
        try {

            localStorage.setItem(storageKey,JSON.stringify(username))
            dispatch({type: actionTypes.LOGIN, payload: username})
            
        } catch (error) {
            dispatch({type: actionTypes.LOGIN_FAILED})
        }
       
        
    }
}