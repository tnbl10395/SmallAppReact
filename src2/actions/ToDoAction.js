import { ADD_TODO, GET_TODO, MOVE_DONE, MOVE_TASK } from '../actions/TypeActions';

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

export const moveTaskDone = () => {
    return {
        type: MOVE_DONE,
    } 
 }

export const moveTask = () => {
    return {
        type: MOVE_TASK,
    } 
}
