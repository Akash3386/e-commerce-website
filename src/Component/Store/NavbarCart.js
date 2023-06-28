import React from "react";
import {Container, Button, Navbar } from 'react-bootstrap';

const NavbarCart = () => {
    return (
        <>
        <Navbar bg="dark" expand="sm" variant="dark" sticky="top" className="bg">
          <Container>
            <Navbar.Brand href="/" className="ml-auto" style={{textAlign:"centre"}}>Home</Navbar.Brand>
            <Navbar.Brand href="/">Store</Navbar.Brand>
            <Navbar.Brand href="/">About</Navbar.Brand>
            <Button style={{backgroundColor:"black",
                            color:"white",
                            borderColor:"#56CCF2",
                            fontSize:"20px",
                            fontWeight:"bold",
                            border:"solid #56CCF2"}}>Cart</Button>
         </Container>
      </Navbar>
  
        </>
    )
}

export default NavbarCart