import React from "react";
import { Button, Container } from "react-bootstrap";

const CartButton = () => {
    return (
        <>
        <Container className="m-10" style={{textAlign:"center"}}>
        <Button className="m-5" style={{backgroundColor:"#777", 
                                        color:"#56CCF2", 
                                        width: "150px", 
                                        height: "50px", 
                                        fontWeight:"bold", 
                                        fontSize:"21px"
                                        }}>See the Cart</Button>
        </Container>
        </>
    )
}

export default CartButton