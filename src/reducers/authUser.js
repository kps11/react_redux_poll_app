import {AUTH_USER} from '../actions/authUser'

export default function authedUser(state=null ,action) {
    switch (action.type){
        case AUTH_USER:
            return action.id
        default:
            return state
    }

}