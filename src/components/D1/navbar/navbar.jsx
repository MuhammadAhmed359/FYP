import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import Hamburger from 'hamburger-react';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
// import LiveF from '../../../components/LiveFootage/live';

const LoginForm = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <DropdownButton
            id="dropdown-item-button"
            title={<span>ADMIN</span>}
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

const NavbarComponent = () => {
    const [showSearch, setShowSearch] = useState(true);
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setShowSearch(!showSearch);
        setOpen(!isOpen); // Toggle the hamburger menu
    };


    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Navbar.Brand href="/dashboard" className="navbar-brand">LOGO</Navbar.Brand>
                    <Hamburger toggled={isOpen} toggle={toggleMenu} />

                    {isOpen ? (
                        <div className="menu">
                            <ul>
                                <li>
                                    <Link to="/dashboard">Home</Link> {/* Use Link component */}
                                </li>
                                <li> <Link to="/live"> Live Footage</Link>
                                {/* <LiveF/> */}
                                </li>
                                <li><Link to="/user">User's</Link></li>
                                <li><Link to="/statistics">Anomaly Statistics</Link></li>
                                <li><Link to="/history">Anomaly History</Link></li>
                            </ul>
                        </div>
                    ) : (
                        <form className="d-flex flex-grow-1 justify-content-center">
                            <input
                                type="search"
                                placeholder="Search Here..."
                                aria-label="Search"
                                className="form-control"
                            />
                        </form>
                    )}

                    <LoginForm />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
