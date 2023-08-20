import React,{useState} from "react";
import {Container, Button} from 'react-bootstrap';
import CartElement from "../CartElement";

const NavbarCartButton = () => {
    const [isShown, setIsShown] = useState(false)

    // const cartCtx = useContext(CartContext)

    const openCart = () => {
      
      setIsShown(current => !current)
    
}
    return (
        <>
        <Container>
          
          <Button style={{backgroundColor:"black",
                          color:"white",
                          borderColor:"#56CCF2",
                          fontSize:"20px",
                          fontWeight:"bold",
                          float: "right",
                          border:"solid #56CCF2",
                          marginRight:"10px"}}
                          onClick={openCart}>Cart</Button>
                          {isShown && <CartElement/>}
          <span style={{color:"#56CCF2"}}>0</span>  
          </Container>      
        </>
    )
}

export default NavbarCartButton