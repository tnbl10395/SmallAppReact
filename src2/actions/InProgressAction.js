import { OPEN_MODAL, GET_INPROGRESS , MOVE_INPROGRESS } from '../actions/TypeActions';


export const openModal = () => {
    return {
        type: OPEN_MODAL,
    }
}

export const getInprogress = (data) => {
    return {
        type: GET_INPROGRESS,
        data,
    }
}

export const moveTaskInProgress = () => {
   return {
       type: MOVE_INPROGRESS,
   } 
}