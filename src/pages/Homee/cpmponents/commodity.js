import '../style/commodity.css'
import { Link } from "react-router-dom";
import {useState}from'react';

/**/
const CartItem=({title,description,price,product,AddToCart})=>{
	const [Quantity, setQuantity] = useState(0);
	return(
		<div className="item-grid"  >
			<div className="title">{`name : ${title}`}</div>
			<div className="description">{description}</div>
			<div className="price">{`price :$ ${price}`}</div>
			
			<button onClick={() => AddToCart(product,Quantity)}>加入購物車</button>
			
		</div>
		)
}

const Commodity=({data,AddToCart,cart})=>{
	
	
	return(
		<div className="commodity">
			<div className="nav">
				<Link to="cartpage">
					<div className="cart">
					<i className="fa-solid fa-cart-shopping"></i>
					購物車(<p className="quantity">{cart.length}</p>
					)
					</div>
				</Link>
			</div>
			<div className="item">
				{
					data.map((product)=>(
			
						<CartItem key={product.id} title={product.title} 
						description={product.description} AddToCart={AddToCart}
						price={product.price}product={product}/>
					))}
			</div>
		</div>
		)

  
}
export default Commodity;