import Commodity from'./components/commodity.js';
import Nav from'./components/nav.js';
import MyContext from '../../compontents/MyContext.js';
import {useContext}from'react';
const Homee=()=>{
	
  	const {isLoading} = useContext(MyContext);
  	/*const { data, setData } = useContext(MyContext);*/
  	const { cart, setCart } = useContext(MyContext);//購物車
  	const { totalPrice, setTotalPrice } = useContext(MyContext);
  	
  	// 加入商品
  	const AddToCart = (product,Quantity) => {
  		Quantity+=1
	  	if(Quantity===1){
				setCart([...cart, {id:product.id,
									    	description:product.description,
									    	images:product.images,
									    	price:product.price,
									    	quantity:Quantity,
									    	title:product.title}]);
	    	setTotalPrice(totalPrice + product.price);
	  	}
	  	if(Quantity>1){
	  		for(let i=0;i<cart.length;i++)
    			if(product.id===cart[i].id){
    				let newCart=[...cart]
						newCart[i].quantity=Quantity
						setCart(newCart)
						setTotalPrice(totalPrice + product.price);
    			} 
    	}	

  };

	
	
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
	return(
			<div className="homee">
				<Nav/>
				<Commodity AddToCart={AddToCart}/>
			</div>	 
		)
}
export default Homee;