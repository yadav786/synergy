import React, { Component } from 'react'
import { Card, CardBody, CardTitle, Button, FormGroup, Form, Input, Label } from 'reactstrap'
import { connect } from 'react-redux' 
import { addArticleAction, getData, loggedIn } from '../actions/addArticleAction'
import { OnlyTestSnap } from './OnlyTestSnap' 
// eslint-disable-next-line react/prefer-stateless-function
class LogIn extends React.PureComponent {
  
  constructor(props){
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef() 
  } 
  
  componentWillReceiveProps(nextProps){ 
       if(nextProps.isUserLoggedIn){   
              this.props.history.push('/home')
       } 
  }  

  validateForm(username, password){
    let formError = false
    let errors = {}
    if (username === ''){
      formError = true
      errors.username = 'Please Enter Your Username'
    }

    if (username.match(/^['a-zA-Z']+$/)){
      formError = true
      errors.username = 'Please Enter Username alphanumeric'
    }

    if (password === ''){
      formError = true
      errors.password = 'Please Enter Your Password'
    }
  
    return formError
  }

  submitForm(event) {
    event.preventDefault()
    let username = this.usernameRef.current.value
    let password = this.passwordRef.current.value
    let isFormError = this.validateForm(username, password)
    if (isFormError){
      alert('Something Went Wrong') 
      return false
    }

  
    this.props.loggedIn({ username: username, password: password })
    const { ...isUserLoggedIn } = this.props 
    console.log(' home this props', this.props); 
  
  }  

  render() {
  
    return (
      <>
        <Card>
          <OnlyTestSnap items = {[1]} />
          <CardBody>
            <CardTitle>Log In</CardTitle>
            <Form onSubmit={this.submitForm}>
              <FormGroup>
                <Label for='Username'>Username</Label>
                <span style={{ color: 'red' }}>
                  {' '}
              
                </span>
                <Input innerRef={this.usernameRef} type='text' placeholder='Please Enter Your Username' />
              </FormGroup> 
              <FormGroup>
                <Label for='Password'>Password</Label>
                <span style={{ color: 'red' }}>
                  {' '}
                </span>
                <Input innerRef={this.passwordRef} type='password' placeholder='Please Enter Your Password'/>
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
  return {isUserLoggedIn: state.fakeLoginData.isUserLoggedIn};
}        
 
const mapDispatchToProps = (dispatch) => {
  return {
    addArticleAction: (article) => {
      dispatch(addArticleAction(article))
    },
    getData: () => {
      dispatch(getData())
    },
    loggedIn: (userData) => {
      dispatch(loggedIn(userData))
    }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
