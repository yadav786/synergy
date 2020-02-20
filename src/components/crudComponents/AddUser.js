import React from 'react' 
import { connect } from 'react-redux'
import { Form, Accordion, Card, Button } from 'react-bootstrap'
import { addUser} from '../../actions/addArticleAction'
const AddUser = (props) => {       
	   
	let username = React.createRef();  
	let age = React.createRef();  
	let address = React.createRef();   
 
   const submitForm = () => {
   	    props.addUser({username:username.current.value,age:age.current.value,address:address.current.value}); 
   }   

	return(  
		<>  
		<Accordion>
		   <Card>
		    <Card.Header>
		       Add User
		    </Card.Header>  
		      <Form> 
		        <Form.Group controlId = "addUserForm.EmailId">
		        	<Form.Label>Username </Form.Label> 
		        	<Form.Control type="text" ref={username} placeholder="pankaj123"/>
		        </Form.Group>   
		        <Form.Group controlId = "addUserForm.Age">
		        	<Form.Label>Age </Form.Label> 
		        	<Form.Control as = "select"  ref={age} > 
  						<option>18</option>
  						<option>25</option>
  						<option>30</option> 
  						<option>35</option>
  						<option>40</option>
		        	</Form.Control>  
		        </Form.Group>  
		        <Form.Group controlId = "addUserForm.Address">
		        	<Form.Label>Address</Form.Label> 
		        	<Form.Control as="textarea" rows="3"  ref={address} />
		        </Form.Group>   
                <Button variant="primary" onClick={() => submitForm()}>Submit</Button>
	          </Form> 
	          </Card>
	          </Accordion>
          </> 
		)   
} 
 
const mapStateToProps = (state) => {
    const {crudOpertion} = state; 
    return crudOpertion
}

const mapDispatchToProps = (dispatch) => {
     return {
      addUser: (userData) => {  
      	 dispatch(addUser(userData))  
      }
    } 
} 

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);   