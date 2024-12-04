import {useContext} from 'react';
import './Product.css';
import { cartContext } from '../App';

const Product = ({ product}) => {
  // Shorten product name if too long
  const {cart, setCart} = useContext(cartContext);
  const name = product.name.length > 10
    ? product.name.substring(0, 15) + "..." 
    : product.name;

  // Add product to the cart
  const addCart = () => {
    setCart([...cart, product]); // Removed the misplaced `}`
  };

  // Remove product from the cart
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id)); // Assuming each product has a unique `id`
  };

  return (
    <div className="product">
      <div className="img">
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price: {product.price}</p>
        {cart.some((c) => c.id === product.id) ? ( // Use `.some()` for better comparison
          <button className="removeCart" onClick={removeCart}>
            Remove from Cart
          </button>
        ) : (
          <button className="addCart" onClick={addCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
