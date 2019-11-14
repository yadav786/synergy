import React from 'react'
import { shallow, Adapter } from 'enzyme'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Profile from '../components/Profile'

const mockStore = configureMockStore()
const store = mockStore()

describe('ProfileComponent', () => {
  it('should render my Profile component', () => {
      	   const wrapper = shallow(<Provider store={store}><Profile/></Provider>)
  })
})
