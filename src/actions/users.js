export const RECEIVE_USERS = 'receive_users'

export function receive_users(users) {
    return {
        type:RECEIVE_USERS,
        users

    }

}