// Note: MyProducts component...!

import React, { useEffect, useState } from 'react'

const MyProducts = () => {

    // States...!
    const [productsList, setProductsList] = useState([]);
    const [authUser, setAuthUser] = useState(null);

    // Note: Mounted component...!
    useEffect(() => {
        if (localStorage.getItem("Products") != null) {
            let fetchProducts = localStorage.getItem("Products");
            fetchProducts = JSON.parse(fetchProducts);
            // console.log('Products: ', fetchProducts);
            fetchProducts && setProductsList(fetchProducts);

            let fetchUser = localStorage.getItem("AuthenticatedUser");
            fetchUser = JSON.parse(fetchUser);
            fetchUser && setAuthUser(fetchUser);
        }

        else {
            localStorage.setItem("Products", JSON.stringify([]));
        }
    }, []);

    return (
        <>
            <h1> My Products Screen! </h1>

            {
                (productsList.length > 0)
                    ?
                    (
                        productsList.map((item, index) => {
                            return (
                                item.vendorId == authUser.email ?
                                    <div key={index}>
                                        <h2> {`Item: ${item.productName}. Price: ${item.productPrice}`} </h2>
                                    </div> : null
                            );
                        })
                    )
                    :
                    (<h1> Data Not Found! 😢 </h1>)
            }
        </>
    );
};

export default MyProducts;