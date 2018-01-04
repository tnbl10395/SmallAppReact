import { GO_HOME, REGISTER, GO_REGISTER, GO_LOGIN, LOGIN } from '../actions/TypeActions';

export const goHome = ()=>{
    return {
        type: GO_HOME
    }
}

export const goRegister = () => {
    return {
        type: GO_REGISTER
    }
}

export const register = (checkRegister) => {
    return {
        type: REGISTER,
        checkRegister
    }
}

export const goLogin = () => {
    return {
        type: GO_LOGIN
    }
}

export const login = (checkAuth) => {
    return {
        type: LOGIN,
        checkAuth
    }
}

