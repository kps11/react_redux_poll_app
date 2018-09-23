import users from  './users'
import polls from './polls'
import authedUser from './authUser'
import {loadingBarReducer} from 'react-redux-loading'

import {combineReducers } from 'redux'

export default  combineReducers({
    users,
    authedUser,
    polls,
    loadingBar:loadingBarReducer

})
    
