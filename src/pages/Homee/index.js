import Commodity from'./cpmponents/commodity.js';
import MyContext from '../../compontents/MyContext.js';
import {useState,useEffect,useContext}from'react';
const Homee=()=>{
	
  	const {isLoading} = useContext(MyContext);
  	const { data, setData } = useContext(MyContext);
  	const { cart, setCart } = useContext(MyContext);//購物車
  	const { totalPrice, setTotalPrice } = useContext(MyContext);
  	
  	// 加入商品
  	const AddToCart = (product,Quantity) => {
	  	if(Quantity!==0){
				setCart([...cart, {id:product.id,
									    	description:product.description,
									    	images:product.images,
									    	price:product.price,
									    	quantity:Quantity,
									    	title:product.title}]);
	    	setTotalPrice(totalPrice + product.price);
	  	}
	   
    
  };

	
	
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
	return(
		<MyContext.Provider value={{ data,setData,cart,setCart,totalPrice,setTotalPrice}}>
			<div className="homee">
				<Commodity data={data} AddToCart={AddToCart} cart={cart} setCart={setCart}/>
			</div>
		 </MyContext.Provider>
		)
}
export default Homee;