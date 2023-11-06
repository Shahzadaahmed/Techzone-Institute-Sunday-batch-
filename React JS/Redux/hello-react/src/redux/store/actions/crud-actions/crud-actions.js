// Note: All action function related to crud app are defined here...!

import actionTypes from "../../constant/action-types";

const addItem = (value) => {
    return (dispatch) => {
        // console.log("Data: ", value);

        dispatch({
            type: actionTypes.ADD_ITEM,
            payload: value
        });
    };
};

const deleteItem = (index) => {
    return (dispatch) => {
        // console.log('Element index: ' , index);

        dispatch({
            type: actionTypes.DELETE_ITEM,
            payload: index
        });
    };
};

const deleteAllItems = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.DELETE_ALL_ITEMS
        });
    };
};

export { addItem, deleteItem, deleteAllItems };