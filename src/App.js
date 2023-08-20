// import { NavLink, Navbar } from 'react-bootstrap';
import './App.css';

import Footer from './Component/Store/Footer';
import Title from './Component/Store/Title';
import NavbarCart from './Component/NavbarCart';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPage from './Component/About/About';
import StorePage from './Component/Store/Store';


function App() {

  const router = createBrowserRouter([
    { path: '/About' , element: <AboutPage/>},
    { path: '/Store', element: <StorePage/>}
  ])
  
  return (
    <>
      
      {/* <NavLink to="/About"></NavLink> */}
      <NavbarCart/>
      <Title/>
      <RouterProvider router={router}/>
      <Footer/>


    

    </>
  );
}

export default App;
