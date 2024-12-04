import React from 'react';
import Product from './Product'; // Import Product component
import data from '../assets/product.json'; // Ensure this path is correct
import './Product.css'; // Verify the path to your CSS file
import './Homepage.css'; // Verify the path to your CSS file

const Home = () => {
  console.log(data); // Log products to verify data is correctly imported

  return (
    <>
      <div className="product-container">
          {data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
    </>
  );
};

export default Home;