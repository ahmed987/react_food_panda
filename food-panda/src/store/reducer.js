import { combineReducers } from 'redux'
import userReducer from './users/reducer'
import todosReducer from './todos/reducer'

export default combineReducers({
    userReducer,
    todosReducer
})