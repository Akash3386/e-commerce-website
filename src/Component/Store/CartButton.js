import React,{useState} from "react";
import { Button, Container } from "react-bootstrap";
import CartElement from "../CartElement";

const CartButton = () => {
   
    const [isShown, setIsShown] = useState(false)

    // const cartCtx = useContext(CartContext)

    const openCart = () => {
      
      setIsShown(true)
    }

    return (
        <>
        <Container className="m-10" style={{textAlign:"center"}}>
        <Button className="m-5" style={{backgroundColor:"#777", 
                                        color:"#56CCF2", 
                                        width: "150px", 
                                        height: "50px", 
                                        fontWeight:"bold", 
                                        fontSize:"21px"
                                        }}onClick={openCart}>See the Cart</Button>
                                        {isShown && <CartElement/>}
        </Container>
        {/* <CartElement/> */}
        </>
    )
}

export default CartButton