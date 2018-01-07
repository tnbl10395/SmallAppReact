import { ADD_TODO, GET_TODO } from '../actions/TypeActions';

export const addTodo = () => {
    return {
        type: ADD_TODO
    }
}

export const getTodo = (data) => {
    return {
        type: GET_TODO,
        data,
    }
}

