import React from 'react'
import { BrowserRouter as Router, NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import HOC from './HOC'
import App from './App'
import About from './About'
import Profile from './Profile'
import Contact from './Contact'
import LogIn from './LogIn'

const AppRouter = (props) => {
  console.log('AppRouter', props)
  const { ...newProps } = props
  console.log('isUserLoggedIn', newProps.isUserLoggedIn)
  let isUserLoggedIn = newProps.isUserLoggedIn
  isUserLoggedIn = true
  return (
    <Router>
      <ul>
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
            </ >
          )
        }
      </ul>
      <Switch>
        { (!isUserLoggedIn) ?
          (
            <Route exact path='/' component={LogIn} />
          )
          :
          (
            <>
              <Route exact path='/Home' component={HOC(App)} />
              <Route exact path='/about' component={HOC(About)} />
              <Route exact path='/profile' component={HOC(Profile)} />
              <Route exact path='/contact' component={HOC(Contact)} />
            </>
          )
        }
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, null)(AppRouter)
