import { LOAD_DATA,GET_DATA, OPEN_MODAL } from '../actions/TypeActions';

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

export const openModal = () => {
    return {
        type: OPEN_MODAL,
    }
}