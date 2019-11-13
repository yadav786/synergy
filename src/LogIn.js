import React, {Component} from 'react';
import {Card, CardBody, CardTitle, Button, FormGroup, Form, Input, Label} from 'reactstrap'; 
import { connect } from 'react-redux' ; 
import {addArticleAction, getData, loggedIn} from './actions/addArticleAction';
  
// eslint-disable-next-line react/prefer-stateless-function
class LogIn extends Component {
  
    constructor(props){  
        super(props); 
        this.submitForm = this.submitForm.bind(this); 
        this.validateForm =  this.validateForm.bind(this);  
        this.usernameRef = React.createRef();   
        this.passwordRef = React.createRef();  
        this.state = { 
          errors:{username:'',password:''}
        }  

    }    
    
    validateForm(username, password){ 
      let formError = false;    
      let errors = {};      
          if(username===''){
             formError = true;
             errors['username'] = "Please Enter Your Username";
          }
          
          if(username.match(/^['a-zA-Z']+$/)){   
              formError = true;
              errors['username'] = "Please Enter Username alphanumeric";  
          }     

          if(password===''){
             formError  = true;
             errors['password'] = "Please Enter Your Password";
          }    
       
       console.log('formError===',formError);    

       if(formError){
           this.setState({
             errors:errors
           });
       }
       return formError; 
    } 

    submitForm (event) {
         event.preventDefault(); 
         let username = this.usernameRef.current.value;     
         let password = this.passwordRef.current.value; 
         let isFormError = this.validateForm(username, password); 
             if(isFormError){
                  alert('Something Went Wrong');  
                  return false;
             }  
          
             const {...props} = this.props;  
             props.loggedIn({username:username, password:password});  
             const {...isUserLoggedIn} = this.props;
             if(isUserLoggedIn){       
                props.history.push('/home'); 
             }      
    }       
 
    render() {
      
      const {...formErrors} = this.state; 
      console.log(formErrors); 
        return( 
          <>
            <Card> 
              <CardBody> 
                <CardTitle>Log In</CardTitle>
                <Form onSubmit={this.submitForm}>
                  <FormGroup>   
                    <Label for="Username">Username</Label>
                    <span style={{color:"red"}}> 
                      {' '}
                      {formErrors.errors.username}
                      {' '} 
                    </span>
                    <Input innerRef={this.usernameRef} type="text" placeholder="Please Enter Your Username" />
                  </FormGroup>   
                  <FormGroup>
                    <Label for="Password">Password</Label>
                    <span style={{color:"red"}}>
                      {' '}
                      {formErrors.errors.password}
                      {' '} 
                    </span>
                    <Input innerRef={this.passwordRef} type="password" placeholder="Please Enter Your Password"/>
                  </FormGroup>     
                  <Button>Submit</Button>
                </Form> 
              </CardBody> 
            </Card>
          </>
              ) 
       }
}

const mapStateToProps = (state) => {
    return state;
} 

const mapDispatchToProps = (dispatch) => {
         return  {
            addArticleAction: (article) => {
               dispatch(addArticleAction(article))
            },
            getData : () => {  
              dispatch(getData())
            },
            loggedIn : (userData) => {  
              dispatch(loggedIn(userData)) 
            } 
         }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn); 