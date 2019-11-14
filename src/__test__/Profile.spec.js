import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Profile from '../components/Profile'
// import renderer from 'react-test-renderer'
const mockStore = configureMockStore()
const store = mockStore()
// Could not find "store" in the context of connect(Profile)
describe('ProfileComponent', () => {
  it('should render my Profile component', () => {
      	   const wrapper = shallow(<Provider store={store}><Profile/></Provider>)
      	   const getWrappedElements = wrapper.getElements()
      	   console.log('getWrappedElements \x1b[36m', getWrappedElements, '\x1b[0m')
      	   console.log('getWrappedElements Props \x1b[35m', getWrappedElements[0].props, '\x1b[0m')
  })
})
