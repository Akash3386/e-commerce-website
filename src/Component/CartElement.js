// import { Button } from "bootstrap";
import React from "react";
import { Table, Container,Button, CloseButton } from "react-bootstrap";

const CartElement = () => {

    const cartElements = [

        {
        
        title: 'Colors',

        name: 'Album1',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',

        name: 'Album2',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',

        name: 'Album3',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]


    return (
        <>
        <Container style={{position: "fixed",
                           top: "50px",
                           height: "95%",
                           right: "0",
                           backgroundColor: "rgb(255, 255, 255)",
                           border: "1px solid rgb(177, 103, 103)",
                           minHeight: "50vh",
                           maxWidth: "900px",
                           padding: "20px 30px"
                          }}>
                        

        <CloseButton style={{border: "1px solid rgb(121, 117, 117)",
                        // borderRadius: "7px",
                       
                        float:"right"
                        }}/>
        <Container>
        {/* <Button style={{position: "absolute",
                        cursor: "pointer",
                        color: "rgb(121, 117, 117)",
                        top: "0",
                        right: "0",
                        margin: "20px",
                        background: "none",
                        fontSize: "16px",
                        fontWeight: "700",
                        border: "1px solid rgb(121, 117, 117)",
                        borderRadius: "7px",
                        padding: "5px"
                        }}>X</Button>  */}
           
        <h2 style={{fontFamily: "Lucida Handwriting",
                  textAlign:"center",  
                  fontSize:"30px", 
                  textWeight:"Bold", 
                  marginTop:"50px", 
                  marginBottom:"50px"
                  }}>Cart</h2>
      </Container>
        <Table>
            <thead>
                <tr style={{fontSize:"20px",marginBottom:"30px"}}>
                    <th>ITEM</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                </tr>
            </thead>
            <tbody>
                {cartElements.map(element => {
                    return(
                        <tr key={element.title}>
                            <td className="m-2"><img className="m-3" 
                                                     src={element.imageUrl} 
                                                     style={{width:"10%",
                                                             height:"10%"
                                                             }}>
                                                </img>
                                               {element.name}
                            </td>
                            <td>{element.price}</td>
                            <td><input style={{width: '40px',
                                               height: '30px',
                                               border: '1px solid rgb(0, 204, 255)',
                                               borderRadius: '8%',
                                               outline: 'none',
                                               textAlign: 'center',
                                               marginRight: '20px'
                                               }} 
                                        value={element.quantity}/>
                                        <Button className="mf-2" variant="danger">Remove</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        </Container>
        </>

    )
}

export default CartElement