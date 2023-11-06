// Note: NotFound component...!

import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    }, []);

    return (
        <>
            <h1> Page Not Found! 😢 </h1>
        </>
    );
};

export default NotFound;