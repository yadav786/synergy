import React from "react";
import { Modal, Button } from "react-bootstrap";
import CommuterDetail from '../maps/CommuterDetail'    
import DriverDetail from '../maps/DriverDetail'    
 
const MarkerPopUp = ({ show, closeMarker, confirm, whichUser, driverDetail ='', commuterDetail="" }) => {
  // console.log('props show', show); 
  return show ? (  
    <Modal.Dialog>
      <Modal.Header> 
        <Modal.Title>Book Driver?</Modal.Title>
      </Modal.Header> 
      <Modal.Body>
        { whichUser === true ? 
          <DriverDetail/> :
        <CommuterDetail/>}  
      </Modal.Body>  
      <Modal.Footer>
        <Button variant="secondary" onClick={closeMarker}>
          Cancel
        </Button> 
        <Button variant="primary" onClick={confirm}>
          Confirm 
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  ) : null;
}; 
 
export default MarkerPopUp;
