import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Product = () => {


    const productsArr = [

        {
        
        title: 'Colors',

        name: 'Album1',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',

        name: 'Album2',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',

        name: 'Album3',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',

        name: 'Album4',
        
        price: 200,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]

    return (
        <>
        
         <Row className="mt-1">
            
            {productsArr.map(product => {
                return (
                <Col key={product.title}  md={{ span: 5, offset: 8 }} className="m-4" style={{textAlign:'center', margin:"auto"}}>
                   <Card className="shadow" style={{width:'18rem', float:"right"}}>
                    <Card.Header style={{textAlign:'center'}}>{product.name}</Card.Header>
                    <Card.Img className="hover-zoom" src={product.imageUrl} responsive style={{width:"auto",height:"200"}}></Card.Img>
                    <Card.Body>
                        <span className="m-8" style={{float:"left", top:'70%'}}>Rs{product.price}</span>
                        <Button className="m-1" style={{float:"right", 
                                                        backgroundColor:"#56CCF2",
                                                        fontWeight:"bold",
                                                        borderRadius:"2px"
                                                        }}>Add to Cart</Button>
                                                     

                    </Card.Body>
                   </Card>
                </Col>
                )
            })}
         </Row>
        </>
    )
}

export default Product