// Note: HomeScreen component...!

import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggleHandler, updateNameHandler } from "../../redux/store/actions/auth-actions/auth-actions";

const HomeScreen = () => {

    const [inputField, setInputField] = useState("");

    const dispatch = useDispatch();

    // Note: Fetching data from redux...!
    const fetchData = useSelector(({ authStates }) => { return authStates });
    console.log("Redux Data: ", fetchData);

    const btnHandler = () => {
        dispatch(toggleHandler());
    };

    const submitForm = () => {
        // console.log(inputField);
        dispatch(updateNameHandler(inputField));
        setInputField("");
    };

    return (
        <>
            <h1> Welcome to Home Screen! {fetchData.userName} </h1>

            <div>
                <input
                    type='text'
                    placeholder='Write something...'
                    value={inputField}
                    onChange={e => setInputField(e.target.value)}
                />
                <button onClick={submitForm}>
                    Submit form
                </button>
            </div>

            <button onClick={btnHandler}>
                Click Me!!!
            </button>
        </>
    );
};

export default HomeScreen;