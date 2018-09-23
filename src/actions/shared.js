import  {getInitialData} from '../Uitils/api'
import {receive_polls} from '../actions/polls'
import {receive_users} from '../actions/users'
import {authedUser } from '../actions/authUser'
import {showLoading , hideLoading} from 'react-redux-loading'

const authrised_id = 'tylermcginnis'


export function handleInitialData() {
    return (dispatch) =>{
        dispatch(showLoading())
        return getInitialData().then(({users,polls}) => {
            dispatch(receive_polls(polls))
            dispatch(receive_users(users))
            dispatch(authedUser(authrised_id))
            dispatch(hideLoading())
        })
    }
    
}