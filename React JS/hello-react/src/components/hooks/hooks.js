import React, { useEffect, useState } from 'react';

const Hooks = () => {

    const [initState, setInitState] = useState(0);
    const [toggle, setToggle] = useState(false);

    const greeting = () => console.log("Hello Ahmed!");
    const testing = () => console.log("Cmponent rendered!");

    const increamentHandler = () => {
        setInitState(initState + 1);
    };

    // Note: THis hook will update on every peroformance...! (case 1)
    useEffect(() => {
        console.log('You are working!');
    });

    // Note: Component mounted hook...! (1 way to use)
    useEffect(() => {
        greeting();
        testing();
    }, []);

    // Note: This hook will work on every update on initState...! (case 2)
    useEffect(() => {
        console.log('Count State is updating!');
    }, [initState]);

    // Note: This hook will work on every update on toggle state...! (case 3)
    useEffect(() => {
        console.log('Toggle State is updating!');
    }, [toggle]);

    // Note: When this component unmount then this hook will run...! (case 4)
    useEffect(() => {
        return () => {
            console.log('component unmounted!');
            clearInterval();
        };
    }, []);

    return (
        <>
            <h1> Learning useEffect Hook in React JS! </h1>

            <h2> Count: {initState} </h2>

            <button
                onClick={increamentHandler}
            >
                Increament Num State
            </button>

            <button onClick={() => setToggle(!toggle)}>
                Toggle State
            </button>
        </>
    );
};

export default Hooks;