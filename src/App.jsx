import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Homepage.jsx"; // Match the exact file name casing
import Viewcart from "./Components/Viewcart.jsx";

export const cartContext  = createContext();
function App() {
  const [cart, setCart] = useState([]);
  
  return (
    <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
          <Header cart={cart}/>
            <div className="container">
            <h3>Eswaran restaurants</h3>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cart" element={<Viewcart/>} />
              </Routes>
            </div>
        </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
