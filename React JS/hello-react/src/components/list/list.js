import React, { useEffect, useState } from 'react';

const ListData = () => {

    const [apiData, setApiData] = useState([]);
    const [tableHeader, setTableHeader] = useState(["name", "email", "website"]);

    const apiCall = () => {
        let apiUrl = "https://jsonplaceholder.typicode.com/users";

        fetch(apiUrl)
            .then((success) => {
                // console.log(success.json());
                return success.json();
            })
            .then((data) => {
                // console.log(data);

                data && setApiData(data);
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    useEffect(() => {
        apiCall();
    }, []);

    return (
        <>
            <h1> How to integrate API in React JS! </h1>

            <table>
                {
                    apiData.length > 0 ?
                        tableHeader.map((item, index) => {
                            return <tr key={index}> <th> {item} </th> </tr>
                        })
                        :
                        null
                }

                {
                    (apiData.length > 0)
                        ?
                        (
                            apiData.map((item, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td> {item.name} </td>
                                            <td> {item.email} </td>
                                            <td> {item.website} </td>
                                        </tr>
                                    </>
                                );
                            })
                        )
                        :
                        (<h1> No Data Found! 😢 </h1>)
                }
            </table>
        </>
    );
};

export default ListData;