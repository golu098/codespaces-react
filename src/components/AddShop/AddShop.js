
import React, { useState } from 'react';
// import './App.css';

function AddShop() {
 const [shops, setShops] = useState([]);
 const [shopName, setShopName] = useState('');
 const [shopImage, setShopImage] = useState('');
 const [shopDescription, setShopDescription] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    const newShop = {
      name: shopName,
      image: shopImage,
      description: shopDescription,
    };
    setShops([...shops, newShop]);
    setShopName('');
    setShopImage('');
    setShopDescription('');
 };

 return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Shop Name:
          <input
            type="text"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
        </label>
        <label>
          Shop Image:
          <input
            type="text"
            value={shopImage}
            onChange={(e) => setShopImage(e.target.value)}
          />
        </label>
        <label>
          Shop Description:
          <textarea
            value={shopDescription}
            onChange={(e) => setShopDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Shop</button>
      </form>
      <div className="shops">
        {shops.map((shop, index) => (
          <div key={index} className="shop">
            <h2>{shop.name}</h2>
            <img src={shop.image} alt={shop.name} />
            <p>{shop.description}</p>
          </div>
        ))}
      </div>
    </div>
 );
}

export default AddShop;