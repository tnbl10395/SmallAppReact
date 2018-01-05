import { GET_FAVORITE, ADD_FAVORITE } from '../actions/TypeActions';

const initialStates = {
    data: [],
    successfully:true,
    heightAI: 20,
}

const LoadFavoriteReducer = (state = initialStates , action) => {
    switch (action.type) {
        case GET_FAVORITE:
            return {
                ...state,
                data: action.data,
                successfully:false,
                heightAI:0           
            }
        // case ADD_FAVORITE:
        //     return state
        default:
            return state;
    }
    return state
}

export default LoadFavoriteReducer;