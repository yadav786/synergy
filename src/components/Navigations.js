import React from 'react' 
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
const Navigations = (props) => {
  const { ...newProps } = props
  let isUserLoggedIn = newProps.fakeLoginData.isUserLoggedIn
  console.log('Navigations isUserLoggedIn', isUserLoggedIn)
  return (<ul>    
    { (!isUserLoggedIn) ?
      (
        <li><NavLink to='/'>Log In</NavLink></li>
      )
      :
      (
        <>
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/profile'>Profile</NavLink></li>
          <li><NavLink to='/contact'>Contact Us</NavLink></li>
          <li><NavLink to='/users'>User</NavLink></li>
        </ >   
      )
    }
  </ul>)

}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Navigations)
