import React from 'react'
import { Modal, Button } from 'react-bootstrap' 
 
const PopUpConfirmation = ({show, deleteThisUser, closeModal}) => {    
       // console.log('props show', show); 
       return(  
            show ? <Modal.Dialog>
				  <Modal.Header>
				    <Modal.Title>Delete User?</Modal.Title>
				  </Modal.Header> 
				  <Modal.Body>
				    <p>Are you sure want to delete?</p>
				  </Modal.Body>
				  <Modal.Footer>
				    <Button variant="secondary" onClick={closeModal}>Close</Button>  
				    <Button variant="primary" onClick={deleteThisUser}>Delete</Button>
				  </Modal.Footer>
			</Modal.Dialog> : null 
       	)  
}

export default PopUpConfirmation;   