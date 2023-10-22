import React from "react";
import { Link } from 'react-router-dom';
import Home from "./Home/Home";
// import Item from "./Item/Item";
import Features from "./Features/Features";
import AddShop from "./AddShop/AddShop";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import HairCutting from "./Services/HairCutting";
import Makeup from "./Services/Makeup";
import OtherProducts from "./Services/OtherProducts";
import "./Navbar.css";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
 
function Navbar1() {
  return (
    <Router>

    <div>
    <Navbar collapseOnSelect expand="lg" bg ="dark" variant={"dark"}>
      <Container>
        <Navbar.Brand as={Link} to={"/Home"}>Time-Trime</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/Features"}>Features</Nav.Link>
            <Nav.Link as={Link} to={"/HairCutting"}>HairCutting</Nav.Link>
            <Nav.Link as={Link} to={"/Makeup"}>Makeup</Nav.Link>
            {/* <Nav.Link as={Link} to={"/RetailProducts"}>RetailProducts</Nav.Link>   */}
            <Nav.Link as={Link} to={"/OtherProducts"}>OtherProducts</Nav.Link>




            {/* <NavDropdown title="Services" id="collapsible-nav-dropdown" className="-black">
              <NavDropdown.Item as={Link} to={"/HairCutting"} className="bg-black hover:text-red-500">Hair-Cutting</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Makeup"} className="bg-black">Makeup</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/RetailProducts"} className="bg-black">Retail Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/Others"} className="bg-black">Others</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to={"/Contact"}>Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
              />
              <Button variant="outline-light" className="text-white">Search</Button>
            </Form>
            <Nav.Link as={Link} to={"/AddShop"}>Add Shops</Nav.Link>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
    <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Features" element={<Features/>}/>

          <Route path="/HairCutting" element={<HairCutting/>} />
          <Route path="/Makeup" element={<Makeup/>} />
          <Route path="/OtherProducts" element={<OtherProducts/>} />

          <Route path="/AddShop" element={<AddShop/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>   
   
    </div>
</Router>
    
  );
}

export default Navbar1;
