import React, {useState} from 'react'
import { connect } from "react-redux"
import { Table, Button, Form, Accordion, Card, striped, bordered, hover, responsive } from 'react-bootstrap'
import { deleteUser} from '../../actions/addArticleAction'
import PopUpConfirmation from '../common/PopUpConfirmation'
   
const UserList = (props) => {  
    const [show, setShow] = useState(false);
    const [userId, setuserId] = useState(false);
    console.log('props userlist', props);  
    const editUser = (userId) => {  
        // console.log('props editUser userlist', userId); 
    }
    const deleteUsers =(userId) => {
	    setShow(true) 
	    setuserId(userId)
    }
    const deleteThisUser = () => { 
    	// console.log('delete this use', userId);  
         props.deleteUser({id:userId});
    } 
    const closeModal = () => { 
    	setShow(false)
    }
	return(    
		<>
		<Accordion>
		<PopUpConfirmation show={show} deleteThisUser ={deleteThisUser} closeModal ={closeModal}/>  
		   <Card>     
		    <Card.Header>
		       List of Users
		    </Card.Header> 
		      <Table striped bordered hover responsive= "xs" variant="dark"> 
		        <thead>       
				    <tr>
				      <th>#</th>
				      <th>Name</th>
				      <th>Age</th>
				      <th>Address</th>
				      <th>Action</th>
				    </tr>
				  </thead>
				  <tbody> 
				   { props.users.map(value => {
				    return(<tr key={value.id}>
				      <td>{value.id}</td> 
				      <td>{value.username}</td>
				      <td>{value.age}</td>
				      <td>{value.address}</td>
				      <td>   
				      <Button variant="primary" onClick={() => editUser(value.id)}>Edit</Button>
				      <Button variant="danger"  onClick={() => deleteUsers(value.id)}>Delete</Button>
				      </td>   
				    </tr>)
				})} 
				  </tbody>
		      </Table> 
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
		   	    deleteUser: (userData) => {  
		      		dispatch(deleteUser(userData))
		    }  
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(UserList); 