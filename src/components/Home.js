import React, { useState, useEffect, useRef, useReducer } from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/App.css'

import { Card, CardBody, CardHeader, CardSubtitle, Spinner, Button } from 'reactstrap'
const Home = () => {

  const [initialize, onChangeState] = useState(0)

  const inputRef = useRef(null)
  const [data, getData] = useState(undefined)
  useEffect(() => {

    async function fetchData() {
      let result = await fetch('http://dummy.restapiexample.com/api/v1/employee/1')
      let allEmpData = await result.json()
      getData(allEmpData)
    }
    fetchData()
    console.log('onClick Button event inn useEffect', initialize)
  }, [])


  const initialState = { count: 1 }

  function reducer(state, action) {
    if (action.type === 'increment'){
      return { count: state.count + 1 }
    } else if (action.type === 'decrement'){
      return { count: state.count - 1 }
    }
    return state


  }

  const [store, dispatch] = useReducer(reducer, initialState)
  // console.log(dispatch);

  function onFocusChangeInput(){
    inputRef.current.focus()
  }

  return (
    <div className='container'>
      <Button onClick={(() => {
        dispatch({ type: 'increment' })
      })} color='info' outline>Dispatch Actions</Button>
      <input type='text' ref={inputRef} />
      <Button onClick={(() => {
        onFocusChangeInput()
      })}>Focus the Input</Button>
      <Button onClick={((initialize) => onChangeState(initialize + 1))} color='success'>INCREMENT</Button>
      {' '}
      <Button onClick={((initialize) => onChangeState(initialize - 1))} color='danger'>DECREMENT</Button>
      {' '}
      {(data === undefined) ? <Spinner style={{ width: '50%', height: '50%' }} color='primary' />
        :
        (
          <p>
        After onChangeState Called...
            { data.employee_name }
          </p>
        )
      }
      {/*
      <pre>
        { JSON.stringify(initialize) }
      </pre>
      */}
      <Card>
        <CardHeader>Query - Displaying all data</CardHeader>
        <CardBody>
         This is the Card Body
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Query - Displaying data with args</CardHeader>
        <CardBody>
          <CardSubtitle>Viewing a user by id</CardSubtitle>

        </CardBody>
      </Card>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, null)(Home)

