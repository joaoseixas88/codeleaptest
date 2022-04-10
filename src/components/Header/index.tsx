import './styles.css'
import { FaTrashAlt, FaEdit } from "react-icons/fa";
type HeaderProps = {
    title:string
    color?:string
    isCreator?: boolean
    onDelete?: () => void;
    onUpdate?: () => void;
}


   
    export const Header = ({title, color, onDelete, onUpdate, isCreator = false}: HeaderProps) => {

       
    return(
        
        <div className='headerStyle' id={color ? color : 'black'}>
            <h1 className='title'>{title}</h1>
            {
                isCreator &&
                <div className='buttonsDiv'>
                    <FaTrashAlt className='icon' color='white' onClick={onDelete}/>
                    <FaEdit className='icon' color='white' onClick={onUpdate}/>  
                </div>
            }
        </div>
    )
}


