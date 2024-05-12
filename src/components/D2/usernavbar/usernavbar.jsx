import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './usernavbar.css';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const LoginForm = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <DropdownButton
            id="dropdown-item-button"
            title={<span>User</span>}
            className="dropdown-button"
        >
            <Dropdown.Item
                as="button"
                onClick={handleClick}
                className="dropdown-item"
            >
                Log Out
            </Dropdown.Item>
        </DropdownButton>
    );
};

const usernavbar = () => {

    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/udashboard" className="navbar-brand">LOGO</Navbar.Brand>
                <LoginForm />
            </Container>
        </Navbar>
    );
};

export default usernavbar;
