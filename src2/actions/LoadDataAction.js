import { LOAD_DATA,GET_DATA } from '../actions/TypeActions';

export const loadData = () => {
    return {
        type: LOAD_DATA
    }
}

export const getData = (data) => {
    return {
        type: GET_DATA,
        data,
    }
}