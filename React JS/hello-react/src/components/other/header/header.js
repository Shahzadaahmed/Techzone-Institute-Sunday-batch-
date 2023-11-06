import React from 'react';

const Header = (props) => {
    // console.log("Props: ", props);

    return (
        <h1> {props.screenName} Screen </h1>
    );
}

export default Header;