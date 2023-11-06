// Note: AboutScreen component...!

import React from 'react'
import { useSelector } from "react-redux";

const AboutScreen = () => {

    // Note: Fetching data from redux...!
    const fetchData = useSelector(({ authStates }) => { return authStates });
    console.log("Redux Data: ", fetchData);

    return (
        <>
            <h1> Welcome to About Screen! Ahmed </h1>
        </>
    );
};

export default AboutScreen;