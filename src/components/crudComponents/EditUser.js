import React from "react";
import { Form, Accordion, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updateUser } from "../../actions/addArticleAction";

const EditUser = props => {
  // console.log('crudOpertion', props);
  let username = React.createRef();
  let age = React.createRef();
  let address = React.createRef();
  const updateUser = userid => {
    if (userid) {
      props.updateUser({
        id: userid,
        username: username.current.value,
        age: age.current.value,
        address: address.current.value
      });
    }
  };
  return (
    <>
      <Accordion>
        <Card>
          <Card.Header className="text-center">Edit User</Card.Header>
          <Form>
            <Form.Group controlId="addUserForm.EmailId">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                ref={username}
                defaultValue={
                  props.editUser && props.editUser.length > 0
                    ? props.editUser[0].username
                    : ""
                }
              />
            </Form.Group>
            <Form.Group controlId="addUserForm.Age">
              <Form.Label>Age </Form.Label>
              <Form.Control
                as="select"
                ref={age}
                defaultValue={
                  props.editUser && props.editUser.length > 0
                    ? props.editUser[0].age
                    : ""
                }
              >
                <option value="18">18</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="addUserForm.Address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                ref={address}
                defaultValue={
                  props.editUser && props.editUser.length > 0
                    ? props.editUser[0].address
                    : ""
                }
              />
            </Form.Group>
            <div className="text-center btn-universe">
              <Button
                variant="primary"
                onClick={() =>
                  updateUser(
                    props.editUser && props.editUser.length > 0
                      ? props.editUser[0].id
                      : ""
                  )
                }
              >
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </Accordion>
    </>
  );
};

const mapStateToProps = state => {
  const { crudOpertion } = state;
  return crudOpertion;
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: userData => {
      dispatch(updateUser(userData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
