import {Container } from 'react-bootstrap';
import './App.css';
import Product from './Component/Store/Product';
import CartButton from './Component/Store/CartButton';
import Footer from './Component/Store/Footer';
import Title from './Component/Store/Title';
import NavbarCart from './Component/Store/NavbarCart';
// import CartProvider from './Component/CartContextProvider';


function App() {
  
  return (
    <>
    
      <NavbarCart/>
      <Title/>
      
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
      <Footer/>


    

    </>
  );
}

export default App;
