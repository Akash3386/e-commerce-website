import React from "react";
import { Card } from "react-bootstrap";
 

const Footer = () => {
    return (
        <>

        
        <Card className='shadow' style={{margin:"0", wight:"100%"}}>
         <Card.Body style={{backgroundColor:'#56CCF2', color:"white", textAlign:"center",padding:"40px"}}>
         <h1 className='d-inline btn float-right' style={{fontFamily: "Georgia", fontSize:"40px", margin:"auto", color:"white"}}>The Generics</h1>
         <Card.Img style={{width:"30px", margin:"20px"}} src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"></Card.Img>
         <Card.Img style={{width:"30px", margin:"20px"}} src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"></Card.Img>
         <Card.Img style={{width:"30px", margin:"20px"}} src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"></Card.Img>
         </Card.Body>
        
        </Card>
     
 
        </>
    )
}

export default Footer