import React, { useState } from 'react';
import Header from './header/header';

const LearningReactHooks = () => {

    const [state, setState] = useState("bilal");
    const [count, setCount] = useState(0);

    // Name change handler...!
    const updateName = () => {
        setState("ahmed");
    };

    const countPlus = () => {

        if (count < 10) {
            setCount(count + 1);
        }

        else {
            alert("COunt limit reached!");
        }
    };

    return (
        <>
            <Header screenName="Other" />
            <h2> My name is {state} </h2>
            <h2> Count: {count} </h2>

            <button onClick={updateName}> Update Name </button>

            <button onClick={() => setCount(count + 1)}> Increase Count </button>
        </>
    );
};

export default LearningReactHooks;
