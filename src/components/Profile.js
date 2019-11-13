import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileDropdown from './ProfileDropdown'
import ProfileGallery from './ProfileGallery'
import { getData, passProfileDropdown } from '../actions/addArticleAction'
import PerformanceWiseFuntionalComponent from './PerformanceWiseFuntionalComponent'
// eslint-disable-next-line react/prefer-stateless-function
class Profile extends Component {

  constructor(props){
    super(props)
    this.onDropDown = this.onDropDown.bind(this)
  }

	onDropDown = (value) => {
	  alert('Profile Called...')
	  console.log('values', value)
	  const { ...NewProps } = this.props
	  NewProps.passProfileDropdown(value)
	}

	render() {
	  return (
	    <>
	      <div>Profile</div>
	      <PerformanceWiseFuntionalComponent/>
	      <ProfileDropdown onClick={(value) => {
	        this.onDropDown(value)
	      }} />
	      <ProfileGallery />
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
    },
    passProfileDropdown: (data) => {
      dispatch(passProfileDropdown(data))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
