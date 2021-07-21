
import {ActionTypes} from '../constants/action-types'

export const setTest = (test) => {
    return {
        type: ActionTypes.TEST_TYPE_01,
        payload: test
    }
}

export const addTest = (test) => {
    return {
        type: ActionTypes.TEST_TYPE_02,
        payload: test
    }
}
