import {savePoll} from "../Uitils/api";
import {showLoading,hideLoading}  from 'react-redux-loading'
export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL ='ADD_POLL'


function add_Poll(poll) {
    return {
        type:ADD_POLL,
        poll

    }

}

export function handleAddPoll(poll) {
    return (dispatch,getState) =>{
        const {authedUser} = getState()
        dispatch(showLoading)
        return savePoll({
            ...poll,
            author: authedUser

        }).then( (poll) => {
            return dispatch(add_Poll(poll))})
            .then(() => dispatch(hideLoading))

    }

}

export function receive_polls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}