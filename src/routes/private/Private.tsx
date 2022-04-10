
import { ReactNode } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/configureStore/configureStore";


interface PrivateRoutesProps{
    children: ReactNode
}


export function PrivateRoute({children}: {children: JSX.Element}){
    
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
    const state = useAppSelector<RootState>(state => state)

    if(!state){
        return <Navigate to='/' />
    }

    return children


}

