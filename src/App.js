import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import HOC from './components/HOC'
import Navigations from './components/Navigations'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Contact from './components/Contact'
import LogIn from './components/LogIn'
import GraphQlExample from './GraphQlExample';

import GET_POKEMON_INFO from './Queries/Pokemon'; 
import { useQuery } from '@apollo/react-hooks';

const App = (props) => {
  const { ...newProps } = props
  let isUserLoggedIn = newProps.isUserLoggedIn
  // console.log('isUserLoggedIn App and Router ====', isUserLoggedIn)
  const {data, loading , error} = useQuery(GET_POKEMON_INFO);
  // console.log('data ====', data);
  // console.log('loading ====', loading);
  // console.log('error ====', error);
    
  return (
    <Router>
      <Navigations/>
      { !loading ?
        <GraphQlExample pokemonList={data} />
        : null
      }
      <Switch>
        { (!isUserLoggedIn) ?
          (
            <Route exact path='/' component={LogIn} />
          )
          :
          (
            <>
              <Route exact path='/Home' component={HOC(Home)} />
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

export default connect(mapStateToProps, null)(App)
