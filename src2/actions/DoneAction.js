import { OPEN_MODAL, GET_DONE , MOVE_TODO, MOVE_DONE } from '../actions/TypeActions';


export const openModal = () => {
    return {
        type: OPEN_MODAL,
    }
}

export const getDone = (data) => {
    return {
        type: GET_DONE,
        data,
    }
}


export const moveTaskTodo = () => {
    return {
        type: MOVE_TODO
    }
}

export const moveTaskDone = () => {
    return {
        type: MOVE_DONE
    }
}