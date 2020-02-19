import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import {
  Provider
} from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {
  store
} from './store/'
// console.log('store===', store)

/* 
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://graphql-pokemon.now.sh/'
});

const client = new ApolloClient({
  cache,
  link
});
*/
// console.log('client === ', client);
  
ReactDOM.render(
  <Provider store = {
    store
  } >
  <App />
  </Provider> , document.getElementById('root'))

serviceWorker.unregister()