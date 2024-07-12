// UserData.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

const UserData = () => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
}

export default UserData;
