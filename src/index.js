import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { store } from './store/'
// console.log('store===', store)
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory'; 
import { HttpLink } from 'apollo-link-http'; 
import { ApolloProvider }  from '@apollo/react-hooks'; 

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://graphql-pokemon.now.sh/'
});

const client = new ApolloClient({
	cache,
	link
});

// console.log('client === ', client);
 
ReactDOM.render(
  <ApolloProvider client={client}>
  <Provider store={store}>
    <App />	
  </Provider>
  </ApolloProvider>
  , document.getElementById('root'))
  
serviceWorker.unregister()
