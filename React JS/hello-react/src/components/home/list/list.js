import React from 'react';

const List = (props) => {
    // console.log("Props: ", props);

    return (
        <div>
            <span> Id: {props.data.id} </span>
            <span> Name: {props.data.name} </span>
            <span> Title: {props.data.title} </span>
        </div>
    );
};

export default List;