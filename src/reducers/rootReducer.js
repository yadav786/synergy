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
    return Object.assign({}, state, { articles: state.articles.concat(action.payload) })
  }
  if (action.type === 'DATA_LOADED'){
    return Object.assign({}, state, { remoteArticles: state.remoteArticles.concat(action.payload) })
  }
  if (action.type === USER_LOGIN){
    return Object.assign({}, state, { isUserLoggedIn: action.userLogged })
  }
  if (action.type === PASS_DROPDOWN){
    return Object.assign({}, state, { passProfiledown: action.passProfiledown })
  }
  if (action.type === GET_CARDS){
  	console.log('GET_CARDS')
    return state
  }
  return state

}

export default rootReducer
