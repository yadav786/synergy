import React from 'react';
import { connect } from 'react-redux'; 
import { Container, Row, Col } from 'react-bootstrap';  
import { AddUser, EditUser, UserList } from './';   

const Users = (props) => {  
     return(
      <Container>
      <Row> 
      <Col xs={6}>
      <AddUser/>
      </Col>
      <Col xs={6}>
      <EditUser/>
      </Col> 
      </Row>  
      <Row>    
      <Col xs={12}>
      <UserList/>
      </Col>
      </Row>   
      </Container>
      )
}  


const mapStateToProps = (state) => {
	const {crudOpertion} = state; 
    return crudOpertion
} 
   
export default connect(mapStateToProps, null)(Users);  