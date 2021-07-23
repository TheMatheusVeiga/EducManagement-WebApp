// import api from "../../services/api"
import axios from "axios";

//Constants
const GET_TEST = "GET_TEST";

const INITIAL_STATE = {
    array: []
}

//Reducer
export default function toolsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_TEST:
            return {...state, array: action.payload}
    
        default:
            return state;
    }
}

//Actions
export const getToolsAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos");
        dispatch({
            type: GET_TEST,
            payload: res,
        })
    } catch (error) {
        console.log(error);
    }
}