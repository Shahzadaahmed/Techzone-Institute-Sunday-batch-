// Note: All dispatch functions are defined here...!
import actionTypes from "../../constant/action-types";

const toggleHandler = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.TOGGLE_BULB
        });
    }
};

const updateNameHandler = (data) => {
    return (dispatch) => {
        // console.log('Form Data: ', data);

        dispatch({
            type: actionTypes.UPDATE_NAME,
            payload: data
        });
    };
};

export { toggleHandler, updateNameHandler };