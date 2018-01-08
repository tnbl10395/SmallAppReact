import { MOVE_TASK, GET_DONE, MOVE_DONE } from '../actions/TypeActions';

const initialStates = {
    data: [],
    successfully:true,
    heightAI: 20,
}

const InprogressReducer = (state = initialStates , action) => {
    switch (action.type) {
        case GET_DONE:
            return {
                ...state,
                data: action.data,
                successfully:false,
                heightAI:0           
            }
        case MOVE_DONE:
            return state
        case MOVE_TASK:
            return state
        default:
            return state;
    }
    return state
}

export default InprogressReducer;