import React from "react";
import { Row } from "react-bootstrap";
import CartContext from "../CartContext";
import ProductItem from "./ProductItem";

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
        
         <Row style={{justifyContent:"space-around"}}>
            
            {productsArr.map(product => {
                return (
                
                     <ProductItem key={product.title} {...product}/>
                   
                )
            })}
         </Row>
        </>
    )
}

export default Product