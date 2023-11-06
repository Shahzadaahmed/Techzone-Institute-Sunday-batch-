import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const logOutUser = () => {
        alert("You have logged out successfully!");
        localStorage.removeItem("AuthenticatedUser");
        window.location.reload();
    };

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'> E-Store </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNav}>
                    <MDBNavbarNav>
                        <MDBNavbarItem style={{ paddingLeft: '10px', paddingTop: '2px' }}>
                            <Link to={'/'}>
                                All Products
                            </Link>
                        </MDBNavbarItem>

                        <MDBNavbarItem style={{ paddingLeft: '10px', paddingTop: '2px' }}>
                            <Link to={'my-products'}>
                                My Products
                            </Link>
                        </MDBNavbarItem>

                        <MDBNavbarItem style={{ paddingLeft: '10px', paddingTop: '2px' }}>
                            <Link to={'add-product'}>
                                Add Product
                            </Link>
                        </MDBNavbarItem>

                        <MDBNavbarItem
                            style={{ paddingLeft: '10px', paddingTop: '2px' }}
                            onClick={logOutUser}
                        >
                            <Link>
                                Logout
                            </Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navbar;