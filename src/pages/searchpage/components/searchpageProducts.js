import { useParams } from "react-router-dom";
import MyContext from '../../../compontents/MyContext.js';
import {useState,useContext} from'react';

const CartItem=({product,cart,setCart})=>{
	const [Quantity, setQuantity] = useState(0);
	const { totalPrice, setTotalPrice } = useContext(MyContext);
	const findItemQuantity=()=>{//尋找購物車內該商品的數量
		if(cart.length!==0)
			for(let i=0;i<cart.length;i++){
				if(product.id===cart[i].id){
					if(cart[i].quantity>Quantity){
						setQuantity(cart[i].quantity)
					}
					return cart[i].quantity;
				} 
		}
		
	}
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
	return(
		<div className="item-grid"  >
			<div className="title">{`name : ${product.title}`}</div>
			<div className="description">{product.description}</div>
			<div className="price">{`price :$ ${product.price}`}</div>
			<div className="itemquantity">數量: {findItemQuantity()}</div>
			<button style={{display:Quantity===0?"block":"nne"}} 
			onClick={()=>AddToCart(product, Quantity)}>加入購物車</button>
			
		</div>
		)
}
const SearchpageProducts=()=>{
	const params=useParams().name.slice(7);//去掉前面的search=
	//console.log(params)
	const {data,cart,setCart} = useContext(MyContext);
	return(
		<div className="commodity">
			<div className="item">
			{data.filter(item=>{
				const searchTerm=params.toLowerCase();//全變小寫好辨識
				const fullName=item.title.toLowerCase();
				return fullName.startsWith(searchTerm);
			})
			.map(product=>(
				<CartItem key={product.id} 
				product={product}cart={cart}setCart={setCart}/>
				))
		}
			</div>
		</div>
		);
}
export default SearchpageProducts;