import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css";

const Header = () => {
	return (
		<Navbar expand="lg" className="header" fixed="top">
			<Container>
				<Navbar.Brand id="home" href="#home">WCE ACM PRESENTS</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#timeline">Timeline</Nav.Link>
						<Nav.Link href="#themes">Themes</Nav.Link>
						<Nav.Link href="#gallery">Gallery</Nav.Link>
						<Nav.Link href="#sponsors">Sponsors</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;