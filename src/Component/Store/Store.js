import React from "react";
import { Container } from "react-bootstrap";
import Product from "./Product";
import CartButton from "./CartButton";

const StorePage = () => {
    return (
        <>
      <Container>
      <h2 style={{fontFamily: "Lucida Handwriting",
                  textAlign:"center",  
                  fontSize:"30px", 
                  textWeight:"Bold", 
                  marginTop:"50px", 
                  marginBottom:"50px"
                  }}>Music</h2>
      </Container>
      <Product/>
      <CartButton/>
      
        </>
    )
}

export default StorePage
