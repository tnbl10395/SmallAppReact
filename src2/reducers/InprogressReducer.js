import { GET_INPROGRESS, MOVE_INPROGRESS } from '../actions/TypeActions';

const initialStates = {
    data: [],
    successfully:true,
    heightAI: 20,
}

const InprogressReducer = (state = initialStates , action) => {
    switch (action.type) {
        case GET_INPROGRESS:
            return {
                ...state,
                data: action.data,
                successfully:false,
                heightAI:0           
            }
        case MOVE_INPROGRESS:
            return state
        default:
            return state;
    }
    return state
}

export default InprogressReducer;