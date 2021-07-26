import api from '../../services/api';

// Constants
const GET_TEST = 'GET_TEST';

const INITIAL_STATE = {
  array: [],
};

// Reducer
export default function toolsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TEST:
      return { ...state, array: action.payload };

    default:
      return state;
  }
}

// Actions
export const getToolsAction = () => async (dispatch) => {
  try {
    const res = await api.get();
    dispatch({
      type: GET_TEST,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
