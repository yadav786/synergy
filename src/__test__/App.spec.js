import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";
import { spy } from "sinon";
import { Provider } from "react-redux";
// import configureMockStore from 'redux-mock-store'
import App from "../App";
import LogIn from "../components/LogIn";
// import Profile from '../components/Profile'

// const mockStore = configureMockStore()
// const store = mockStore()
import { store } from "../store/";

describe("Provider ...", () => {
  let mountWrapper;
  let shallowWrapper;
  let renderWrapper;

  beforeEach(() => {
    // shallowWrapper = shallow(<Provider store={store}><App /></Provider>)
    mountWrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // renderWrapper = render(<Provider store={store}><App /></Provider>)
  });

  it("Provider rendering  `Provider` ...", () => {
    // console.log('renderWrapper', JSON.stringify(renderWrapper))
    // console.log('shallowWrapper', JSON.stringify(shallowWrapper))

    // console.log('store', JSON.stringify(store))
    // console.log('mountWrapper debug====', mountWrapper.debug())
    // mountWrapper.setProps({isUserLoggedIn:true})
    // console.log('Finding LogIn ....' + JSON.stringify(mountWrapper.find(LogIn)) + 'Ending')
    // const mockLogout = jest.fn()
    // const callback = spy()
    console.log(
      "\x1b[33m mountWrapper LogIn  Debug ===",
      mountWrapper.find(LogIn).debug()
    );
    console.log(
      "\x1b[33m mountWrapper LogIn  ===",
      JSON.stringify(mountWrapper.find(LogIn)) + "\x1b[0m"
    );
    // console.log('\x1b[32m mountWrapper LogIn Form ===', mountWrapper.find(LogIn).find('Form').debug() + '\x1b[0m')
    console.log(
      "\x1b[32m mountWrapper LogIn Form ===",
      mountWrapper
        .find(LogIn)
        .find("Button")
        .simulate("click") + "\x1b[0m"
    );
    // console.log('\x1b[35m ', mountWrapper.find(LogIn).find('Button').get(0), '\x1b[0m')
    // expect(mockLogout).toHaveBeenCalled()
    // console.log('shallowWrapper find \x1b[34m', JSON.stringify(Object.keys(shallowWrapper.find('div')).length) + '\x1b[0m')
    const button = mountWrapper.find(LogIn).find("Button");
    // button.simulate('submit')
    // const div = document.createElement('div')
    // ReactDOM.render(<Provider store={store}><App /></Provider>, div)
    // ReactDOM.unmountComponentAtNode(div)
  });

  it("App Router Testing ...", () => {});

  it("Login Testing ...", () => {});

  it("componentDidMount", () => {});
});

describe("Demonstration ...", () => {
  test("Demonstration Purpose", () => {
    expect(1).toBe(1);
  });
});
