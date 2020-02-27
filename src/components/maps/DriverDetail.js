import React from 'react';
import {Card, Button, Table} from 'react-bootstrap';  
const DriverDetail = () => { 
      return(  
      	<Card>
			<Card.Body>
			    <Card.Title>Driver Details</Card.Title>
			    <Card.Text> 
			<Table striped bordered hover responsive="xs" variant="dark">
      	    <thead>
	            <tr>
	              <th>Driver Name</th>
	              <th>Address</th>
	              <th>Vehicle No.</th>
	              <th>Pickup Time</th>
	              <th>Drop Time</th>
	            </tr>  
	        </thead>
	        <tbody>
	            <tr key={1}>
	              <th>Driver Name</th>
	              <th>Address</th>
	              <th>Vehicle No.</th>
	              <th>Pickup Time</th>
	              <th>Drop Time</th>
	            </tr>
	        </tbody>
            </Table>
			    </Card.Text>
			  </Card.Body>
		</Card>
      	)
}

export default DriverDetail;