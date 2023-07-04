import React, { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import CartContext from "../CartContext";


const ProductItem = (props) => {

    const cartCtx = useContext(CartContext)

    const addToCartHandler = (product) => {
        cartCtx.addToCart(product)

    }
    return (
        <>
        <Col md={4}className="m-4" style={{textAlign:'center', margin:"auto"}}>
                   <Card className="shadow" style={{width:'18rem', float:"right"}}>
                    <Card.Header style={{textAlign:'center'}}>{props.name}</Card.Header>
                    <Card.Img className="hover-zoom" src={props.imageUrl} style={{width:"auto",height:"200"}}></Card.Img>
                    <Card.Body>
                        <span className="m-8" style={{float:"left", top:'70%'}}>Rs{props.price}</span>
                        <Button className="m-1" style={{float:"right", 
                                                        backgroundColor:"#56CCF2",
                                                        fontWeight:"bold",
                                                        borderRadius:"2px"
                                                        }}
                                                        onClick={() => {addToCartHandler(props)}}>Add to Cart</Button>
                                                     

                    </Card.Body>
                   </Card>
                </Col>
        </>
    )
}

export default ProductItem