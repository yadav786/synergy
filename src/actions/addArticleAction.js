import axios from 'axios' 
import API from '../components/constants/api-constants';  
const ADD_ARTICLE = 'ADD_ARTICLE' 
const USER_LOGIN = 'USER_LOGIN'
const PASS_DROPDOWN = 'PASS_DROPDOWN'
const GET_CARDS = 'GET_CARDS'

const GET_USERS = 'GET_USERS'
const ADD_USER = 'ADD_USER'
const EDIT_USERDATA = 'EDIT_USERDATA'

export const addArticleAction = (payload) => {

  return { type: ADD_ARTICLE, payload }
}

export const passProfileDropdown = (passProfiledown) => {
  return { type: PASS_DROPDOWN, passProfiledown }
}

export const getCards = () => {
  return { type: GET_CARDS }
}

export const loggedIn = (userLogin) => {
  let userLogged = false
  /*   
  if (userLogin.username === 'pankaj123' && userLogin.password === 'yadav123'){
    userLogged = true
  }
  */
    return(dispatch) => {
         return axios.get(API.BASE_URL+''+API.USERS).then( res => {
              if(res && res.data){    
                 console.log('res', res);
                 userLogged = true;
                 dispatch({ type: USER_LOGIN, userLogged })
             }     
         })
    }  
  // return { type: USER_LOGIN, userLogged }
}

export const getData = () => {

  return (dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch({ type: 'DATA_LOADED', payload: json })
      })
  }

}

export const getUsers = () => {  
  return { type: GET_USERS }
} 

/*
export const addUser  = (userData) => {
   return(dispatch) => {  

         return axios.get(API.BASE_URL+''+API.USERS, {...userData, authentication:true } ).then( res => {
                           console.log('res', res);  
           
         })
    }  
   // return { type: ADD_USER, payload: userData}
} 

*/

export const addUser  = (userData) => { 
   return(dispatch) => {  
    axios({
      method: "post",
      url: API.BASE_URL+''+API.USERS,
      params: userData 
    }).then(res =>  {
          dispatch({ type: GET_USERS, payload: res.data.data })   
     })
  } 
}  

export const editUserData = (userData) => {
    return(dispatch) => {   
        axios({
          method: "get",
          url: API.BASE_URL+''+API.USERS,
          params: userData  
        }).then(res =>  {   
              dispatch({ type: EDIT_USERDATA, payload: res.data.data })   
         })
      } 
}

export const deleteUser  = (userData) => { 
   console.log('userData',userData);
   return(dispatch) => {     
   axios({
      method: "delete", 
      url: API.BASE_URL+''+API.USERS,
      params: userData 
    }).then(res =>  { 
          let resData = [];
          if(res.data.data.length > 0){  
              resData = res.data.data
          } 

          dispatch({ type: GET_USERS, payload: resData })   
     })   
}
}

