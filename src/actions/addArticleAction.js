const ADD_ARTICLE = 'ADD_ARTICLE'
const USER_LOGIN = 'USER_LOGIN'
const PASS_DROPDOWN = 'PASS_DROPDOWN'
const GET_CARDS = 'GET_CARDS'
export const addArticleAction = (payload) => {

  return { type: ADD_ARTICLE, payload }
}

export const passProfileDropdown = (passProfiledown) => {
  return { type: PASS_DROPDOWN, passProfiledown }
}

export const getCards = () => {
  console.log('ACTIONS GET_CARDS')
  return { type: GET_CARDS }
}

export const loggedIn = (userLogin) => {
  console.log('userLogin', userLogin)
  let userLogged = false
  if (userLogin.username === 'pankaj123' && userLogin.password === 'yadav123'){
    userLogged = true
  }
  return { type: USER_LOGIN, userLogged }
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

// getData();
