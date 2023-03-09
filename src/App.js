import { HashRouter, Route, Routes } from "react-router-dom";
import Homee from"./pages/Homee";
import Cartpage from "./pages/cart";
import MyContext from './compontents/MyContext.js';
import {useState}from'react';
function App() {
  const [data, setData] = useState([]);  
  const [cart, setCart] = useState([]);//購物車
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <MyContext.Provider value={{data,setData,cart,setCart,totalPrice,
    setTotalPrice}}>
    <HashRouter>

      <Routes>
        <Route path="/" exact element={<Homee />} />
        <Route path="/cartpage" element={<Cartpage />} />
      </Routes>
      
    </HashRouter>
    </MyContext.Provider>
  );
}

export default App;
