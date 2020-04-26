import React from 'react';
import { Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="light" variant="light" fixed="top" style={{ borderBottom: '1px solid' }}>
            <Navbar.Brand href="#"><img
                alt=""
                src="../../src/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}App Name</Navbar.Brand>
        </Navbar>
    )
}

export default Menu;