import React, { useState } from 'react';

const LearningForm = () => {

    const [userInput, setUserInput] = useState("");
    const [numInput, setNumInput] = useState("");

    // const formHandler = (e) => {
    //     // console.log(e.target.value);
    //     setUserInput(e.target.value);
    // };

    const submitHandler = () => {
        // console.log('Running!');
        console.log(userInput, numInput);
        setUserInput("");
        setNumInput("");
    };

    return (
        <>
            <h1> Learning Form in React JS! </h1>

            <input
                type={'text'}
                placeholder="Write Something..."
                value={userInput}
                // onChange={formHandler}
                onChange={(e) => setUserInput(e.target.value)}
            />

            <br />

            <input
                type={'number'}
                placeholder="Enter any number"
                value={numInput}
                onChange={(e) => setNumInput(e.target.value)}
            />

            <br />

            <button onClick={submitHandler}>
                Submit Form
            </button>
        </>
    );
};

export default LearningForm;