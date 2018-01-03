import { LOAD_DATA,GET_DATA } from '../actions/TypeActions';

const initialState = {
    data: [],
    successfully:true,
    heightAI: 20,
}

const LoadDataReducer = (state = initialState , action) => {
    switch (action.type) {
        case LOAD_DATA:
            return state
        case GET_DATA:
            return {
                ...state,
                data: action.data,
                successfully:false,
                heightAI:0           
            }
        default:
            return state;
    }
    return state
}

export default LoadDataReducer;