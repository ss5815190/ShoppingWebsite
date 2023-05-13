import { HashRouter, Route, Routes } from "react-router-dom";
import Homee from"./pages/Homee";
import Cartpage from "./pages/cart";
import Searchpage from"./pages/searchpage";
import MyContext from './compontents/MyContext.js';
import {useState,useEffect}from'react';
import InfiniteScroll from "./compontents/InfiniteScrolltest.js";

function App() {
  const [data, setData] = useState([]);  
  const [cart, setCart] = useState([]);//購物車
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
       .then(apidata => {
        //let a=apidata.filter(el=>el.id<50)
        setData(apidata);
          setIsLoading(false);
          console.log(apidata); 
        });
    }, []);
  // InfiniteScroll(data,setData,setIsLoading);
  return (
    <MyContext.Provider value={{data,setData,cart,setCart,totalPrice,
    setTotalPrice,isLoading}}>
    <HashRouter>

      <Routes>{/**/}
        <Route path="/" exact element={<Homee />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/:name" element={<Searchpage />} />
      </Routes>
      
    </HashRouter>
    </MyContext.Provider>
  );
}

export default App;
