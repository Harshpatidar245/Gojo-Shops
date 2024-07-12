import React, { useContext } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'; // Adjust the path based on your file structure
import SigninGif from "../Components/Assets/signin.gif";
import './CSS/UserDropdown.css'


const UserDropdown = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useContext(AuthContext);
  
    const handleProfile = () => {
      console.log('Profile clicked');
      navigate('/profile');
    };
  
    const handleHelp = () => {
      console.log('Help clicked');
      navigate('/help');
    };
  
    const handleLogout = () => {
      console.log('Logout clicked');
      logout();
      navigate('/');
    };
  
    return (
      isAuthenticated ? (
        <DropdownButton
          id="dropdown-basic-button" className='dropdown-button-profile'
          title={<img src={SigninGif} className='user-profile-img' alt="User Menu" style={{ width: '40px', height: '35px' }} />}
          
        >
          <Dropdown.Item onClick={handleProfile}>Profile</Dropdown.Item>
          <Dropdown.Item onClick={handleHelp}>Help</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      ) : (
        <Link  to="/log">
          <button className="btn btn-primary" >Login</button>
        </Link>
      )
    );
  };
  
  export default UserDropdown;