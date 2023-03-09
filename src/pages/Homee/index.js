import Commodity from'./cpmponents/commodity.js';
import MyContext from '../../compontents/MyContext.js';
import {useState,useEffect,useContext}from'react';
const Homee=()=>{
	
  	const [isLoading, setIsLoading] = useState(true);
  	const { data, setData } = useContext(MyContext);
  	const { cart, setCart } = useContext(MyContext);//購物車
  	const { totalPrice, setTotalPrice } = useContext(MyContext);
  	
  	// 加入商品
  	const AddToCart = (product,Quantity) => {
    setCart([...cart, {id:product.id,
								    	description:product.description,
								    	images:product.images,
								    	price:product.price,
								    	quantity:Quantity,
								    	title:product.title}]);
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