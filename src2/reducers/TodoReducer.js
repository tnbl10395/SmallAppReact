import { GET_TODO, ADD_TODO } from '../actions/TypeActions';

const initialState = {
    data: [],
    successfully:true,
    heightAI: 20,
}

const TodoReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_TODO:
            return state;
        case GET_TODO:
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

export default TodoReducer;