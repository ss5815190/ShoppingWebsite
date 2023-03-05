import Commodity from'./cpmponents/commodity.js';
import {useState,useEffect,createContext}from'react';
const Homee=()=>{
	const MyContext = createContext();
	const [data, setData] = useState([]);
  	const [isLoading, setIsLoading] = useState(true);
  	const [cart, setCart] = useState([]);//購物車
  	const [totalPrice, setTotalPrice] = useState(0);

  	// 加入商品
  	const AddToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
  };

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
	
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
	return(
		<MyContext.Provider value={{ data,setData,cart,setCart,totalPrice,setTotalPrice}}>
			<div className="homee">
				<Commodity data={data} AddToCart={AddToCart} cart={cart}/>
			</div>
		 </MyContext.Provider>
		)
}
export default Homee;