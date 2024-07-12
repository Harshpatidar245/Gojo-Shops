import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist';
import Order from './Pages/Order';
import Footer from './Pages/Footer';
import ProductDetail from './Product/ProductDetail';
import Cart from './Pages/Cart';
import Log from './Pages/Log';
import Logout from './Pages/Logout';
import SignUp from './Pages/SignUp';
import ShopContextProvider from './Context/ShopContext';
import { AuthProvider } from './Context/AuthContext';
import UserData from './Pages/UserData';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <ShopContextProvider>
            <Navbar /> {/* Navbar is here */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<Order />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/log" element={<Log />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/userdata" element={<UserData />} />
            </Routes>
            <Footer /> {/* Footer is here */}
          </ShopContextProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
