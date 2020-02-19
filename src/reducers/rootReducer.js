const ADD_ARTICLE = 'ADD_ARTICLE'
const USER_LOGIN = 'USER_LOGIN'
const PASS_DROPDOWN = 'PASS_DROPDOWN'
const GET_CARDS = 'GET_CARDS'
const initialState = {
  articles: [],
  remoteArticles: [],
  isUserLoggedIn: false,
  passProfiledown: 0
}

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE){
    return {...state }
  } 
  if (action.type === 'DATA_LOADED'){
    return {...state}
  }   
  if (action.type === USER_LOGIN){ 
    console.log('state', state); 
    return { ...state, isUserLoggedIn:  action.userLogged};
  }    
  if (action.type === PASS_DROPDOWN){
    return {...state, passProfiledown: action.passProfiledown }
  }  
  if (action.type === GET_CARDS){    
    return state 
  }
  return state
 
}

export default rootReducer
