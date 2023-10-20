import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar1 from "./components/Navbar/Navbar";
// import Navbar1 from "./Navbar";
// import Navbar1 from "react";
// import Navbar1 from "./Navbar1";
import Navbar1 from "./components/Navbar1";
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import AddShop from "./components/AddShop/AddShop";
// import AddShops from "./components/AddShop/AddShop";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Item" element={<Item/>} />
          <Route path="/AddShop" element={<AddShop/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

