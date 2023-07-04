import React, { useContext, useState } from "react";
import {Container, Button, Navbar } from 'react-bootstrap';
import CartElement from "../CartElement";
import CartContext from "../CartContext";

const NavbarCart = () => {

    const [isShown, setIsShown] = useState(false)

    const cartCtx = useContext(CartContext)

    const openCart = () => {
      setIsShown(current => !current)
    }
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
                            float: "right",
                            border:"solid #56CCF2"}}
                            onClick={openCart}>Cart</Button>
                            {isShown && <CartElement/>}
              <span style={{color:"white"}}>{cartCtx.amount}</span>              
                                                   
         </Container>
      </Navbar>
  
        </>
    )
}

export default NavbarCart