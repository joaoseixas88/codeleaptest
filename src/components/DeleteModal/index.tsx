import  Modal  from 'react-modal'
import './styles.css'
interface ModalProps{
    isOpen: boolean
    closeModal: () => void
    onClick: () => void
}

export function DeleteModal({isOpen, closeModal, onClick}: ModalProps){




    return(
        <Modal
            onRequestClose={closeModal}
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="delete-react-modal-content"
        >
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2>Are you sure you want to delete this item ?</h2>
                <div  className='btnsDiv'>
                    <button className='buttons' onClick={closeModal}>Cancel</button>
                    <button className='buttons' onClick={onClick}>OK</button>
                </div>
            </div>
        </Modal>
    )
}