;


interface action{
    type: string;
    payload: string
}

export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: "LOGOUT"
}




export const login = (payload: string) => ({type: actionTypes.LOGIN, payload})
export const logout = () => ({type: actionTypes.LOGOUT})

