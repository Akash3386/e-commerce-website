import React from "react";
import { Card } from "react-bootstrap";

const Title = () => {
    return (
        <>
        {/* <Container fluid className="mt-1" style={{margin:"0"}}> */}
        <div className="mt-1">
        <Card className='shadow'>
         <Card.Body style={{backgroundColor:'#777', color:"white", textAlign:"center",padding:"40px"}}>
         <h1 className='dispay-1' style={{fontFamily: "Georgia", fontSize:"100px"}}>The Generics</h1>
         </Card.Body>
    
        </Card>
        </div>
 {/* </Container> */}
        </>
    )
}

export default Title