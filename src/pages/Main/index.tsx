import './styles.css'
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { RootState } from '../../redux/configureStore/configureStore';
import { api } from '../../services/api';
import { FormEvent, useEffect, useState } from 'react';
import { renderPost } from './renderPosts';
import { getData } from '../../actions/updatePosts';
import { AppDispatch } from '../../redux/configureStore/configureStore';


interface PostProps{

    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;
}

interface FetchProps{
    data: PostProps[];
    loading: boolean;
    error: any
}


export function Main(){

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

    
    const  { username, posts}   = useAppSelector<RootState>(state => state)
    const dispatch = useDispatch<AppDispatch>()
    
    const fetchedPosts: FetchProps = posts
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const isActive = content !== '' && title !== '' ? true : false
    

    useEffect(() => {
        dispatch(getData())
    },[])

   
    async function handleCreateNewPost(event: FormEvent){
        event.preventDefault()

        if(!title && !content){
            return 
        }

        const newPost = {
            username,
            title,
            content            
        }

        await api.post("/",newPost)
        setContent('')
        setTitle('')
        dispatch(getData())
        
    }

    useEffect(() => {
        
    },[posts])

    return(        
            <div className='content'>
                <Header title="CodeLeap Network"/>
                <div className='fieldDiv'>
                    <h1>What`s on your mind <span>@{username}?</span></h1>

                    <form className='postDiv'  id='form'
                        onSubmit={handleCreateNewPost}
                    >                       
                        <label htmlFor='title'>
                            Title
                            <input 
                                id='title'
                                type="text" 
                                onChange={e => setTitle(e.target.value)}
                            />
                        </label>
                        <label htmlFor='postContent'>
                            Content
                            <textarea 
                                name="" 
                                id="postContent" 
                                cols={2} rows={5}
                                onChange={e => setContent(e.target.value)}
                            ></textarea>
                        </label>
                        <div className='btnDiv'>
                            <Button
                                isActive={isActive}                                                       
                                title='CREATE'
                                type="submit"
                            />
                        </div>
                    </form>                    
                </div>
                <section>
                    {fetchedPosts.loading ? null : renderPost(fetchedPosts.data, username)}
                </section>
            </div>        
    )
}