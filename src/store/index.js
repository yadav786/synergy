import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import {
    composeWithDevTools
} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import crudReducer from '../reducers/crudReducer'
import rootReducer from '../reducers/rootReducer'
const allReducers = combineReducers({fakeLoginData:rootReducer, crudOpertion:crudReducer});    
export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));   