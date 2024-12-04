import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import './Styleheader.css';  // Correct import
import { cartContext } from '../App';

const Header = () => {
  const {cart,setCart} = useContext(cartContext);
  return (
    <div className="nav">
      <div className="logo">Eswaran restaurant</div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Cart"><span className="cartCount">{cart.length}</span>View Cart</Link> {/* Updated Link path */}
        </li>
      </ul>
      
    </div>
  );
}

export default Header;
