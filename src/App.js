import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

function App() {
  const [product, setProduct] = useState([
    { url: images['product_1.png'], name: "Blouse 1", price: 25 },
    { url: images['product_2.png'], name: "Blouse 2", price: 30 },
    { url: images['product_3.png'], name: "Blouse 3", price: 35 },
    { url: images['product_4.png'], name: "Blouse 4", price: 40 },
    { url: images['product_5.png'], name: "Blouse 5", price: 45 },
    { url: images['product_6.png'], name: "Blouse 6", price: 50 },
    { url: images['product_7.png'], name: "Blouse 7", price: 55 },
    { url: images['product_8.png'], name: "Blouse 8", price: 60 },
    { url: images['product_9.png'], name: "Blouse 9", price: 65 },
    { url: images['product_10.png'], name: "Blouse 10", price: 70 },
    { url: images['product_11.png'], name: "Blouse 11", price: 75 },
    { url: images['product_12.png'], name: "Blouse 12", price: 80 },
    { url: images['product_13.png'], name: "Jacket 1", price: 85 },
    { url: images['product_14.png'], name: "Jacket 2", price: 90 },
    { url: images['product_15.png'], name: "Jacket 3", price: 95 },
    { url: images['product_16.png'], name: "Jacket 4", price: 100 },
    { url: images['product_17.png'], name: "Jacket 5", price: 105 },
    { url: images['product_18.png'], name: "Jacket 6", price: 110 },
    { url: images['product_19.png'], name: "Jacket 7", price: 115 },
    { url: images['product_20.png'], name: "Jacket 8", price: 120 },
    { url: images['product_21.png'], name: "Jacket 9", price: 125 },
    { url: images['product_22.png'], name: "Jacket 10", price: 130 },
    { url: images['product_23.png'], name: "Jacket 11", price: 135 },
    { url: images['product_24.png'], name: "Jacket 12", price: 140 },
    { url: images['product_25.png'], name: "Hoodie 1", price: 145 },
    { url: images['product_26.png'], name: "Hoodie 2", price: 150 },
    { url: images['product_27.png'], name: "Hoodie 3", price: 155 },
    { url: images['product_28.png'], name: "Hoodie 4", price: 160 },
    { url: images['product_29.png'], name: "Hoodie 5", price: 165 },
    { url: images['product_30.png'], name: "Hoodie 6", price: 170 },
    { url: images['product_31.png'], name: "Hoodie 7", price: 175 },
    { url: images['product_32.png'], name: "Hoodie 8", price: 180 },
    { url: images['product_33.png'], name: "Hoodie 9", price: 185 },
    { url: images['product_34.png'], name: "Hoodie 10", price: 190 },
    { url: images['product_35.png'], name: "Hoodie 11", price: 195 },
    // { url: images['product_36.png'], name: "Hoodie 12", price: 200 },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    const itemInCart = cart.find((item) => item.name === data.name);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.name === data.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };

  const increaseQuantity = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (name) => {
    const itemInCart = cart.find((item) => item.name === name);
    if (itemInCart.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.name !== name));
    }
  };

  const removeFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <Router>
      <div>
        <Header count={cart.length} handleShow={handleShow} setShowCart={setShowCart} />
        <Routes>
          <Route path="/" element={
            showCart ? (
              <CartList 
                cart={cart} 
                increaseQuantity={increaseQuantity} 
                decreaseQuantity={decreaseQuantity} 
                removeFromCart={removeFromCart} 
              />
            ) : (
              <ProductList product={product} addToCart={addToCart} />
            )} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
