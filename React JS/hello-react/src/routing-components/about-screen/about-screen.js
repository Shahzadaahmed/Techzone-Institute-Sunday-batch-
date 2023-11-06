// Note: AboutScreen component...!

import React, { useState } from 'react';

const AboutScreen = () => {
    const [userInput, setUserInput] = useState("");

    const submitHandler = (keyboard) => {
        // console.log(keyboard);

        if (keyboard.key == "Enter") {
            console.log('Bs set hy!');
        };
    }

    return (
        <>
            <h1> Welcome to About Screen! </h1>

            <input
                type='text'
                placeholder='Enter City Name'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => submitHandler(e)}
            />
        </>
    );
};

export default AboutScreen;