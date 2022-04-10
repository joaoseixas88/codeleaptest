
import { api } from '../../services/api';
import { Header } from '../Header'
import { formattedTime } from './formatTime';
import './styles.css'
import  Modal  from 'react-modal'
import { UpdateModal } from '../../pages/Modal';
import { useState } from 'react';
import { DeleteModal } from '../DeleteModal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/configureStore/configureStore';
import { deletePost } from '../../actions/updatePosts';

interface PostProps{
    username :string
    post:{
        id: number;
        created_datetime: string;
        title: string;
        username: string
        content: string
    }
    
}


export function Post({username, post}: PostProps){
    
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const dispatch = useDispatch<AppDispatch>()

    function handleDelete(){
        dispatch(deletePost(post.id))
    }
     
    return(
        <>
            <Header
                title={post.title}
                isCreator={post.username === username}
                onDelete={() => setIsDeleteModalOpen(true)}
                onUpdate={() => setIsEditModalOpen(true)}
            />
            <div id='content'>
                <div id='userDiv'>
                    <h3 className='user'>
                        {`@${post.username}`}
                    </h3>
                    <p className='user'>
                        {formattedTime(post.created_datetime)}
                    </p>
                </div>
                <p>
                    {post.content}
                </p>
                <Modal 
                    overlayClassName='react-modal-overlay'
                    className="react-modal-content"
                    isOpen={isEditModalOpen}
                >
                    <UpdateModal
                        id={post.id}
                        closeModal={() => setIsEditModalOpen(false)}
                    />
                </Modal>
                <DeleteModal 
                    onClick={handleDelete}
                    closeModal={() => setIsDeleteModalOpen(false)}
                    isOpen={isDeleteModalOpen}
                />
            </div>
        </>
    )
}