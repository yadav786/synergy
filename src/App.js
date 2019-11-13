import React, { useState, useEffect, useRef, useReducer } from 'react'
import { connect } from 'react-redux'
// import { useQuery } from '@apollo/react-hooks';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/App.css'

import { Card, CardBody, CardHeader, CardSubtitle, Spinner, Button } from 'reactstrap'
// import { GET_USERS, VIEW_USERS, HELLO } from "./Queries";
// /onChangeState(1);
const App = () => {

  const [initialize, onChangeState] = useState(0)
  // console.log('initialize', initialize);
  console.log('useState', useState(0))
  // console.log('useEffect', useEffect);
  const inputRef = useRef(null)
  console.log('After change', JSON.stringify(initialize))
  // componentDidMount and componentDidUpdate
  const [data, getData] = useState(undefined)
  useEffect(() => {

    async function fetchData() {
      let result = await fetch('http://dummy.restapiexample.com/api/v1/employee/1')
      let allEmpData = await result.json()
      getData(allEmpData)
    }
    fetchData()

    alert('useEffect will gets called after rendering only or changing in states')
    console.log('onClick Button event inn useEffect', initialize)
  }, [])

  // console.log('typeof useEffect called', typeof useEffect);

  // console.log(onChangeState());
  // console.log(onChangeState);
  // const getAllUsers = useQuery(GET_USERS);
  // const hello = useQuery(HELLO);
  // console.log('hello data====',hello.data);
  // const userInfo = useQuery(VIEW_USERS, { variables: { id: 1 }});
  // Spinner
  // if (getAllUsers.loading || userInfo.loading) return <Spinner style={{width:'50%', height:'50%'}} color="dark" />;
  // if (getAllUsers.error || userInfo.error) return <React.Fragment>Error :(</React.Fragment>;

  // console.log(data);

  /* <Spinner style={{'marginTop':'40%', 'marginLeft':'25%',width:'50%', height:'50%'}} color="primary" />*/

  // Making a reducer store
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
  console.log(store)
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

export default connect(mapStateToProps, null)(App)

