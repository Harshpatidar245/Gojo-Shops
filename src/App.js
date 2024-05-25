// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist';
import Order from './Pages/Order';
import Footer from './Pages/Footer';
import ProductDetail from './Product/ProductDetail';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Log from './Pages/Log';
import SignUp from './Pages/SignUp';
import ShopContextProvider from './Context/ShopContext'; // Import ShopContextProvider
import UserData from './Pages/UserData';

function App() {
  return (
    <div className="App">
      <Router>
        <ShopContextProvider> {/* Wrap your routes with ShopContextProvider */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* <Route path='/login' element={<Login/>} />  */}
            <Route path='/log' element={<Log/>} /> 
            <Route path='/signup' element={<SignUp/>} /> 
            <Route path='/cart' element={<Cart />} /> {/* Ensure consistent path */}
            <Route path="/userdata" element={<UserData />} />
          </Routes>
          <Footer />
        </ShopContextProvider>
      </Router>
    </div>
  );
}

export default App;
