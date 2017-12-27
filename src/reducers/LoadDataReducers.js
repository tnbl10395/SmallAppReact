import { LOAD_DATA } from "../actions/TypeAction.js";

export const loadDataReducers = (state={},action)=>{
    switch(action.type){
        case LOAD_DATA:
            return {
                ...state,
                data:loadDataAPI()
            }
    }
    return state;
}

const loadDataAPI = ()=>{
    fetch('http://travellingdn.herokuapp.com/api/location')
    .then((response)=>response.json())
    .then((responseJson))
    .done();
    return responseJson;
}