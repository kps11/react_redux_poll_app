export const AUTH_USER = 'AUTH_USER'

export function authedUser(id) {
    return {
        type:AUTH_USER,
        id,

    }

}