const GET_USERS = 'GET_USERS'
const initialState = {
    users: []
}

const crudReducer = (state = initialState, action) => {
    if (action.type === GET_USERS) {
        return {...state, users: [] }
    } 
    return state
} 

export default crudReducer