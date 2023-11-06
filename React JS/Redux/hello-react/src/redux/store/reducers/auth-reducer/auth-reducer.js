// Note: AuthReducer...!
import actionTypes from "../../constant/action-types";

const INIT_STATE = {
    userName: undefined,
    toggleBulb: false
};

const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case actionTypes.UPDATE_NAME:
            // console.log('UPDATE_NAME case: ', action);

            return {
                ...state,
                userName: action.payload
            }

        case actionTypes.TOGGLE_BULB:
            // console.log("TOGGLE_BULB Action", action);

            return {
                ...state,
                toggleBulb: true
            }

        default:
            return state;
    }
};

export default authReducer;