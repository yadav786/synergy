import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  FormGroup,
  Form,
  Input,
  Label
} from "reactstrap";
import { connect } from "react-redux";
import { loggedIn } from "../actions/addArticleAction";
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    // this.validateForm = this.validateForm.bind(this);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isUserLoggedIn) {
      this.props.history.push("/home");
    }
  }
  /* 
  validateForm(username, password) {
    let formError = false;
    let errors = {};
    if (username === "") {
      formError = true;
      errors.username = "Please Enter Your Username";
    }

    if (username.match(/^['a-zA-Z']+$/)) {
      formError = true;
      errors.username = "Please Enter Username alphanumeric";
    }

    if (password === "") {
      formError = true;
      errors.password = "Please Enter Your Password";
    }

    return formError;
  }
*/
  submitForm(event) {
    event.preventDefault();
    let username = this.usernameRef.current.value;
    let password = this.passwordRef.current.value;
    this.props.loggedIn({ username: username, password: password });
    return true;
  }

  render() {
    return (
      <div className="login">
        <div className="custom-column-3" />
        <div className="custom-column-3">
          <Card>
            <CardBody>
              <CardTitle className="text-center">Log In</CardTitle>
              <Form onSubmit={this.submitForm}>
                <FormGroup>
                  <Label for="Username">Username</Label>
                  <span style={{ color: "red" }}> </span>
                  <Input
                    innerRef={this.usernameRef}
                    type="text"
                    placeholder="Please Enter Your Username"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <span style={{ color: "red" }}> </span>
                  <Input
                    innerRef={this.passwordRef}
                    type="password"
                    placeholder="Please Enter Your Password"
                  />
                </FormGroup>
                <div className="text-center">
                  <Button>Submit</Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
        <div className="custom-column-3" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isUserLoggedIn: state.fakeLoginData.isUserLoggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    loggedIn: userData => {
      dispatch(loggedIn(userData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
