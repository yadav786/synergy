import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import { Provider } from 'react-redux'
// import configureMockStore from 'redux-mock-store'
import App from '../App'

// import Profile from '../components/Profile'

// const mockStore = configureMockStore()
// const store = mockStore()
import { store } from '../store/'


describe('Provider ...', () => {

  it('Provider rendering  `Provider` ...', () => {

    const shallowWrapper = shallow(<Provider store={store}><App /></Provider>)
    console.log('shallowWrapper debug====', shallowWrapper.debug())

    // console.log('shallowWrapper find \x1b[34m', JSON.stringify(Object.keys(shallowWrapper.find('div')).length) + '\x1b[0m')
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><App /></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('App Router Testing ...', () => {

  })


  it('Login Testing ...', () => {

  })

})


describe('Demonstration ...', () => {
  test('Demonstration Purpose', () => {
    expect(1).toBe(1)
  })
})
