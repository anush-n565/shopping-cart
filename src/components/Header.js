import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ count, handleShow, setShowCart }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setShowCart(false); 
    navigate('/');
  };

  return (
    <header>
      <h1 onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Shopping Cart</h1>
      <div className="cart-container" onClick={() => handleShow(true)} style={{ cursor: 'pointer' }}>
        <FaShoppingCart size={30} color="white" />
        <span>{count}</span>
      </div>
    </header>
  );
};

export default Header;
