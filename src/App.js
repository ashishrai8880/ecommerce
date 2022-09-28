import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import About from "./About";
import Home from "./Home"
import Cart from "./Cart"
import Contact from "./Contact"
import Products from "./Products"
import SingleProduct from "./SingleProduct"
import ErrorPage from "./ErrorPage";

const App = () => {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About/>} />

        <Route path="/cart" element={<Cart/>} />

        <Route path="/products" element={<Products/>} />

        <Route path="/contact" element={<Contact/>} />

        <Route path="/singleproduct/:id" element={<SingleProduct/>} />

        <Route path="*" element={<ErrorPage/>} />

      </Routes>

    </Router>
  );
};

export default App;
