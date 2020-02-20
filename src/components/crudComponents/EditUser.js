import React from 'react'
import { Form, Accordion, Card, Button } from 'react-bootstrap'
import { editUserData} from '../../actions/addArticleAction'

const EditUser = () => { 
	return(   
		<>
		<Accordion>
		   <Card>
		    <Card.Header>
		       Edit User
		    </Card.Header>  
		      <Form>  
		        <Form.Group controlId = "addUserForm.EmailId">
		        	<Form.Label>Email </Form.Label> 
		        	<Form.Control type="text" placeholder="pankaj123"/>
		        </Form.Group> 
		        <Form.Group controlId = "addUserForm.Age">
		        	<Form.Label>Age </Form.Label> 
		        	<Form.Control as = "select">  
  						<option>18</option>
  						<option>25</option>
  						<option>30</option> 
  						<option>35</option>
  						<option>40</option>
		        	</Form.Control>  
		        </Form.Group>  
		        <Form.Group controlId = "addUserForm.Address">
		        	<Form.Label>Address</Form.Label> 
		        	<Form.Control as="textarea" rows="3"/>
		        </Form.Group>        
                <Button variant="primary">Submit</Button>
	          </Form>
	          </Card>
	          </Accordion>
          </> 
		)   
}   

const mapStateToProps = ( state ) => {
       	const {crudOpertion} = state; 
    	return crudOpertion
}    

const mapDispatchToProps = (dispatch) => {
      return { 
		   	    editUserData: (userData) => {    
		      		dispatch(editUserData(userData))
		    }  
  }
}

export default EditUser;