// Note: CrudReducer...!

import actionTypes from "../../constant/action-types";

const INIT_STATE = {
    todoList: []
};

const crudReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case actionTypes.DELETE_ALL_ITEMS:

            return {
                ...state,
                todoList: []
            }

        case actionTypes.DELETE_ITEM:
            console.log('Action: ', action);

            let todoClone = state.todoList.slice(0);
            todoClone.splice(action.payload, 1);

            return {
                ...state,
                todoList: todoClone
            }

        case actionTypes.ADD_ITEM:
            // console.log('Action: ', action);

            let todoListClone = state.todoList.slice(0);
            todoListClone.push(action.payload);

            return {
                ...state,
                todoList: todoListClone
            };

        default:
            return state;
    }
};

export default crudReducer;