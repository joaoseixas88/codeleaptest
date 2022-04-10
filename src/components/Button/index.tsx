import './styles.css'

interface ButtonProps{
    title: string;
    onClick?: () => void;
    color?: 'blue' | 'black' | 'gray';
    isActive?: boolean
    type: any
}

export function Button({title, onClick,color, isActive = true, type}: ButtonProps)
{

    function chooseColor(){
        if(!isActive){
            return color = 'gray'
        } else if (color === 'blue'){
            return color = 'blue'
        } return color = 'black'
    }

    
    
    return(        
        <button        
            className={chooseColor()}
            onClick={onClick}
            disabled={!isActive}
            type={type}
        >{title}</button>

    )
}