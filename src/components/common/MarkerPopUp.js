import React from "react";
import { Modal, Button } from "react-bootstrap";

const MarkerPopUp = ({ show, closeMarker, confirm }) => {
  // console.log('props show', show);
  return show ? (  
    <Modal.Dialog>
      <Modal.Header> 
        <Modal.Title>Delete User?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure want to delete?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeMarker}>
          Close
        </Button>
        <Button variant="primary" onClick={confirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  ) : null;
}; 
 
export default MarkerPopUp;
