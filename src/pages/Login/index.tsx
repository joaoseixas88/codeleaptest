import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button'
import { useDispatch } from 'react-redux';
import './styles.css'
import { login } from '../../actions/auth.actions';



export function Login(){

    const dispatch = useDispatch()
    
    const [userName, setUserName] = useState('')
    
    
    return(

        <div className='bgDiv'>
            <div className='loginDiv'>
                <h2>Welcome to CodeLeap network!</h2>
                <div id='field'>
                    <span>Please enter your username:</span>
                    <input type="text" 
                        className='inputText'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <div className='buttonDiv'>
                        <Link to='/main'>
                            <Button 
                                isActive={userName !== ''}
                                title='ENTER'
                                onClick={() => dispatch(login(userName))}
                                color='black'
                                type={'button'}
                                />
                        </Link>
                    </div>
                </div>
               
            </div>
        </div>
    )
}