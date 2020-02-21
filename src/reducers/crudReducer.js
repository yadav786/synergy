const GET_USERS = 'GET_USERS'
const EDIT_USERDATA = 'EDIT_USERDATA'
const initialState = {
    users: [],
    editUser:[]
}   

const crudReducer = (state = initialState, action) => {
    if (action.type === GET_USERS) {
        return {...state, users: action.payload}
    }    
    if (action.type === EDIT_USERDATA) {    
        return {...state, editUser: action.payload}
    }        
    return state
} 

export default crudReducer