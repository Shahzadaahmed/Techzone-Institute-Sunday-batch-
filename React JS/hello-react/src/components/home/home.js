// Note: Home component...!

import React from "react";
import "./style.css";
import Header from "../other/header/header";
import List from "./list/list";

const dummyData = [
    {
        id: 1,
        name: "ahmed",
        title: "software engineer"
    },

    {
        id: 2,
        name: "bilal",
        title: "front end developer"
    },

    {
        id: 3,
        name: "aizaz",
        title: "graphics designer"
    },

    {
        id: 4,
        name: "sheroz",
        title: "internee"
    },
];

const Home = () => {

    let userInfo = {
        myName: "Ahmed",
        company: "10 Pearls",
        employees: "500",
    };
    // console.log(userInfo);
    // console.log(dummyData);

    let today = new Date().getDay();
    // console.log(today);

    return (
        <div>
            <h1> Components in React! </h1>
            <h2> Hello: <span className="name-section"> {userInfo.myName} </span> </h2>

            {
                dummyData.map((i, key) => {
                    return (
                        <List
                            key={key}
                            data={i}
                        />
                    );
                })
            }

            <hr />

            {
                (today == 0 && today < 1)
                    ?
                    (<h2> Today is sunday! </h2>)
                    :
                    (<h2> Today is not sunday! </h2>)
            }
        </div>
    );
};


const employee = {
    name: "Ahmed",
    city: "Karachi",
    area: {
        areaName: "Nazimabad",
        areaNo: "1",
        street: "24"
    }
}

const Contact = () => {
    return (
        <div>
            <Header
                screenName="Contact"
                employeeData={employee}
            />
            <hr />
        </div>
    );
};

export {
    Home,
    Contact
};