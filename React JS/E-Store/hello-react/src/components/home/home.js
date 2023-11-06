// Note: AllProducts component...!

import React, { useEffect, useState } from 'react'

const AllProducts = () => {

    // States...!
    const [productsList, setProductsList] = useState([]);

    // Note: Mounted component...!
    useEffect(() => {
        if (localStorage.getItem("Products") != null) {
            let fetchProducts = localStorage.getItem("Products");
            fetchProducts = JSON.parse(fetchProducts);
            console.log('Products: ', fetchProducts);
            fetchProducts && setProductsList(fetchProducts);
        }

        else {
            localStorage.setItem("Products", JSON.stringify([]));
        }
    }, []);

    return (
        <>
            <h1> All Products Screen! </h1>

            {
                (productsList.length > 0)
                    ?
                    (
                        productsList.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2> {`Item: ${item.productName}. Price: ${item.productPrice}`} </h2>
                                </div>
                            );
                        })
                    )
                    :
                    (<h1> Data Not Found! 😢 </h1>)
            }
        </>
    );
};

export default AllProducts;