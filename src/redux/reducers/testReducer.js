import ActionTypes from "../constants/action-types";

const initialState = {
    test: [
        {
        id:1,
        title: "Teste",
        category: "Teste",
    },
]
}

export const testReducer = (state = initialState, {type, payload}) => {
switch (type) {
    case ActionTypes.TEST_TYPE_01:
        return state;

    default:
        return state;
}
}