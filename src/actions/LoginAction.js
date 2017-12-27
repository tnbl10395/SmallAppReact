import { LOGIN } from '../actions/TypeAction.js'

export const login = (username,password) => {
    return {
        type: LOGIN,
        username,
        password,
    }
}
// export default login;