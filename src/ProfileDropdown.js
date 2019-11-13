import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { getData } from './actions/addArticleAction'
import './App.css'
// eslint-disable-next-line react/prefer-stateless-function
class ProfileDropdown extends Component {

  constructor(props){
    super(props)
    // this.dropDownSelect = this.dropDownSelect.bind(this)
    this.onDropDown = this.onDropDown.bind(this)
    this.inputRef = React.createRef(null)
    // passProfiledown
  }

  /* dropDownSelect =(e)=>{
      e.persist()
      const { target } = e
      if (target.value !== ''){
      }

    }
   */
    onDropDown = () => {
      alert('onDropDown Dropdown')
      // console.log('ProfileDropdown', this)
      this.props.onClick(this.inputRef.current.value)

    }

    render() {

      console.log('ProfileDropdown rendering...', this.props.passProfiledown)

      return (
        <>
          <div>Profile Dropdown</div>
          <div className='profile'>
            <Form>
              <FormGroup>
                <Label for='exampleEmail'>Please Select</Label>
                <Input defaultValue={this.props.passProfiledown} innerRef={this.inputRef} type='select' name='select' id='exampleSelect'>
                  <option value='1' key={1}>1</option>
                  <option value='2' key={2}>2</option>
                  <option value='3' key={3}>3</option>
                  <option value='4' key={4}>4</option>
                </Input>
              </FormGroup>
            </Form>
            <Button color='primary' onClick={() => {
              this.onDropDown()
            }}>Submit</Button>
          </div>
        </>
      )
    }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getData())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown)
