import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import AppRouter from './AppRouter'
import * as serviceWorker from './serviceWorker'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

console.log('store===', store)

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  , document.getElementById('root'))

serviceWorker.unregister()
