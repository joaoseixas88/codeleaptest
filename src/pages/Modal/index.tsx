import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { useDispatch } from 'react-redux'
import { updatePost } from "../../actions/updatePosts";

interface Props{
    id: number
    closeModal: () => void;
}

export function UpdateModal({id,closeModal}: Props){


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const isActive = content !== '' && title !== '' ? true : false
    const dispatch = useDispatch()

    async function handleUpdatePost(event: FormEvent){

        event.preventDefault()

        const updatedPost = {
            title: title,
            content: content
        }

        // await api.post(`/${id}`)
        dispatch(updatePost({id, post: updatedPost}))
        closeModal()
    }

    return( 
            <div>                
                <div >
                    <h1>Edit item</h1>
                    <form className='postDiv'  id='form'
                        onSubmit={handleUpdatePost}
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
                                title='SAVE'
                                type="submit"
                            />
                        </div>
                    </form>                    
                </div>
            </div> 
            
    )
}