import React from 'react';

const ProductList = ({ product, addToCart }) => {
  return (
    <div className="product-list">
      {product.map((item, index) => (
        <div key={index} className="product-item">
          <img src={item.url} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <button className="add-to-cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
