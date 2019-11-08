import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import ApolloClient from 'apollo-boost';
//import { ApolloProvider} from '@apollo/react-hooks'; 
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 
//import { addArticleAction } from './actions/addArticleAction';
import rootReducer from './reducers/rootReducer'; 
//import {addArticleAction} from './addArticleAction'; //getData
import App from './App'; 
import * as serviceWorker from './serviceWorker';  
 
//rxjs   
//data structure library immutable.js 
//isomorphic React   
//JSON Web Token
//front-end development tools such as Babel, Webpack, NPM, etc.
  
//ReactDOM.render(<App />, document.getElementById('root'));
//const client = new ApolloClient({
//    uri: 'http://localhost:4000/graphql'
// });
 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  

//  store.dispatch(getData);
  //store.subscribe(() =>  console.log('store subscribed....',store.getState()));   
  //store.dispatch(addArticleAction('ADD_ARTICLE',{name:"Pankaj",lastname:"Yadav"}));
  
  //Testing Purpose
  /* 
  const reducerTest =  (state = 0, action) => { 
    console.log('reducerTest state',state);
    console.log('action',action);    
    if(action.type==='INCREMENT'){
          state = state + 1;
      }
      if(action.type === 'DECREMENT'){
        state = state - 1;
      } 
      
      return state;
  }  
  */
  //const testStore = createStore(reducerTest); 
  //console.log(testStore);    
  //testStore.subscribe( () => { 
      //@ts-nocheckalert('subscribed....');
  //});   
  //testStore.dispatch({type:'INCREMENT'});  
  //testStore.dispatch({type:'INCREMENT'});  
  //testStore.dispatch({type:'DECREMENT'});   
  //console.log(testStore.getState());    

  //<ApolloProvider client={client}>
   //</ApolloProvider>

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
