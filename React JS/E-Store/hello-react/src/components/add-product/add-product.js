// Note: AddProduct component...!

import React, { useEffect, useState } from 'react'

const AddProduct = () => {
    const [states, setStates] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        productsList: [],
        authUser: null
    });

    // Note: Mounted hook...!
    useEffect(() => {
        if (localStorage.getItem("Products") != null) {
            let fetchProducts = localStorage.getItem("Products");
            fetchProducts = JSON.parse(fetchProducts);
            // console.log('Products: ', fetchProducts);

            let fetchUser = localStorage.getItem("AuthenticatedUser");
            fetchUser = JSON.parse(fetchUser);
            // console.log('User: ', fetchUser);

            setStates({
                ...states,
                productsList: fetchProducts,
                authUser: fetchUser
            });
        }
    }, []);

    const addProduct = () => {
        let productObj = {
            productName: states.productName,
            productDescription: states.productDescription,
            productPrice: states.productPrice,
            vendorId: states.authUser.email
        };
        // console.log(productObj);

        let productsClone = [...states.productsList];
        productsClone.push(productObj);
        setStates({
            ...states,
            productsList: productsClone,
            productName: "",
            productDescription: "",
            productPrice: ""
        });
    };

    // NOte: This hook will work on every update of states.productsList
    useEffect(() => {
        if (states.productsList.length > 0) {
            localStorage.setItem("Products", JSON.stringify(states.productsList));
        };
    }, [states.productsList]);

    return (
        <>
            <h1> Add Product Screen! </h1>

            <div>
                <label>
                    Product Name:
                    <input
                        type="text"
                        placeholder='Enter Product Name'
                        value={states.productName || ""}
                        onChange={(e) => setStates({ ...states, productName: e.target.value })}
                    />
                </label>
                <br />

                <label>
                    Product Description:
                    <input
                        type="text"
                        placeholder='Enter Product Description'
                        value={states.productDescription || ""}
                        onChange={(e) => setStates({ ...states, productDescription: e.target.value })}
                    />
                </label>
                <br />

                <label>
                    Product Price:
                    <input
                        type="number"
                        placeholder='Enter Amount'
                        value={states.productPrice || ""}
                        onChange={(e) => setStates({ ...states, productPrice: e.target.value })}
                    />
                </label>
                <br />

                <button onClick={addProduct}>
                    Add Product
                </button>
            </div>
        </>
    );
};

export default AddProduct;