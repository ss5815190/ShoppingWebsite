import { HashRouter, Route, Routes } from "react-router-dom";
import Homee from"./pages/Homee";
import Cartpage from "./pages/cart";
import ShoppingCart from './pages/Homee/cpmponents/shoppingcart.js';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Homee />} />
        <Route path="/cartpage" element={<Cartpage />} />
      </Routes>
      
    </HashRouter>
  );
}

export default App;
