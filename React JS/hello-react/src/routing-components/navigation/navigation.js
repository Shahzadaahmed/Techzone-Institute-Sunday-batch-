import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const Navigation = () => {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand> React Routing </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavSecond}>
                    <MDBNavbarNav>
                        <MDBNavbarLink>
                            <Link to={'/'}> Home </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'about'}> About </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'contact'}> Contact </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'todo-list'}> Todo List </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'list-data'}> API Data </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'image-slider'}> Image Slider </Link>
                        </MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navigation;