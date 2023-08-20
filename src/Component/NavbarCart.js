import React, { useContext, useState } from "react";
import {Container, Button, Navbar } from 'react-bootstrap';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavbarCartButton from "./Store/NavbarCartButton";

const NavbarCart = () => {

    
      
    const router = createBrowserRouter([
      { path: '/Store' , element: <NavbarCartButton/>},

    ])

    
    return (
        <>
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top" className="bg" >
          <Container fluid>
          <Container fluid   style={{justifyContent:"center"}}>
            <Navbar.Brand href="/"  style={{margin:"0px 40px"}}>Home</Navbar.Brand>
            <Navbar.Brand href="/Store" style={{margin:"0px 40px",color:"white"}}>Store</Navbar.Brand>
            <Navbar.Brand href="/About" style={{color:"white", margin:"0px 40px"}}>About</Navbar.Brand>
          </Container>
          </Container>
          <RouterProvider router={router}/>
                  
                                                   
         
      </Navbar>
  
        </>
    )
}

export default NavbarCart