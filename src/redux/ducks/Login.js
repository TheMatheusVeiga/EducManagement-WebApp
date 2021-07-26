import api from '../../services/api';

// Constants
const DO_LOGIN = 'DO_LOGIN';
const DO_LOGIN_RESPONSE = 'DO_LOGIN_RESPONSE';

const INITIAL_STATE = {
  user: {
      username: "",
      pass: "",
      status: "",
      message: "",
  },
};

// Reducer
export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DO_LOGIN_RESPONSE:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}

// Actions
export const doLoginAction = () => async (dispatch) => {
  try {
    const res = await api.get();
    dispatch({
      type: DO_LOGIN_RESPONSE,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
