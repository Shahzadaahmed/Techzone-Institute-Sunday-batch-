import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, deleteAllItems } from '../../redux/store/actions/crud-actions/crud-actions';

const Crud = () => {

    // States...!
    const [inputState, setInputState] = useState("");

    // Redux...!
    const dispatch = useDispatch();

    // Note: Fetching redux data...!
    const fetchReduxData = useSelector(({ crudStates }) => { return crudStates.todoList });
    console.log('Redux Todo List: ', fetchReduxData);

    // Note: Add item handler...!
    const addItemHandler = () => {
        // console.log(inputState);
        dispatch(addItem(inputState));
        setInputState("");
    };

    // Note: Delete item handler...!
    const deleteItemHandler = (index) => {
        dispatch(deleteItem(index));
    };

    return (
        <div>
            <h1> Crud App using React with Redux! </h1>

            <div>
                <input
                    type='text'
                    placeholder='Write Something...'
                    value={inputState}
                    onChange={e => setInputState(e.target.value)}
                />

                <button onClick={addItemHandler}> Add Item </button>
                <button onClick={() => dispatch(deleteAllItems())}> Delete All Items </button>
            </div>

            <div>
                {
                    fetchReduxData && fetchReduxData.length > 0 ?
                        fetchReduxData.map((item, index) => {
                            return (
                                <h3 key={index}>
                                    {item}
                                    <button onClick={() => deleteItemHandler(index)}> Delete Item </button>
                                </h3>
                            );
                        })
                        : <h1> Data Not Found! 😢 </h1>
                }
            </div>
        </div>
    );
};

export default Crud;