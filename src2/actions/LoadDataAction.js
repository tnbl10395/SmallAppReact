import { LOAD_DATA,GET_DATA, OPEN_MODAL, GET_FAVORITE, ADD_FAVORITE } from '../actions/TypeActions';

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

export const getFavorite = (data) => {
    return {
        type: GET_FAVORITE,
        data,
    }
}

export const addFavorite = () => {
   return {
       type: ADD_FAVORITE,
   } 
}