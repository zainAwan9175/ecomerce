

// import Nav from "./Component/Navbar/Nav";
// import Shop from "./Pages/shop";
// import Cart from "./Pages/Cart";
// import Login from "./Pages/Login";
// import Shopchatagory from "./Pages/Shopchatagory";
// import { useParams } from "react-router-dom";

// import "./App.css"
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Footer from "./Component/Footer/Footer";
// import men from "./Component/Asets/banner_mens.png"
// import women from "./Component/Asets/banner_women.png"
// import kids from "./Component/Asets/banner_kids.png"
// import Product from "./Pages/Product";
// function App() {
//   return (
    
//     <div className="mainA">
         
//      <BrowserRouter>
//       {/* <Nav /> */}
//      <Routes>
//       <Route  path="/" element={<Shop />}/>
//       <Route  path="/men" element={<Shopchatagory chatagory="men" baner={men}/>}/>
//       <Route  path="/women" element={<Shopchatagory chatagory="women" baner={women} />}/>
//       <Route  path="/kids" element={<Shopchatagory chatagory="kid" baner={kids}/>}/>
//       <Route   path="/product:Id" element={<Product />}></Route>
  
//       <Route  path="/cart" element={<Cart />}/>
//       <Route  path="/login" element={<Login />}/>

  
//      </Routes>
//       <Footer />
//      </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/Navbar/Nav";
import Shop from "./Pages/shop";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Shopchatagory from "./Pages/Shopchatagory";
import Footer from "./Component/Footer/Footer";
import men from "./Component/Asets/banner_mens.png";
import women from "./Component/Asets/banner_women.png";
import kids from "./Component/Asets/banner_kids.png";
import Product from "./Pages/Product";

function App() {
  return (
    <div className="mainA">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<Shopchatagory chatagory="men" baner={men} />}
          />
          <Route
            path="/women"
            element={<Shopchatagory chatagory="women" baner={women} />}
          />
          <Route
            path="/kids"
            element={<Shopchatagory chatagory="kid" baner={kids} />}
          />
          <Route path="/product/:Id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
