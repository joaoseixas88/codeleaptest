
import { ReactNode } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login, storageKey } from "../../actions/auth.actions";
import { AppDispatch, RootState } from "../../redux/configureStore/configureStore";


interface PrivateRoutesProps{
    children: ReactNode
}


export function PrivateRoute({children}: {children: JSX.Element}){
   
    const dispatch = useDispatch<AppDispatch>()
       
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

    const { username } = useAppSelector<RootState>(state => state)

    const storagedUserName = localStorage.getItem(storageKey)
    
    if(!username){
        if(storagedUserName){
            dispatch(login(JSON.parse(storagedUserName)))
            return children
        }
        return <Navigate to='/'/>
    }
    

    return children


}
