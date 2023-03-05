import '../style/commodity.css'
import { Link } from "react-router-dom";
const Commodity=({data,AddToCart,cart})=>{
	
	
	return(
		<div className="commodity">
			<Link to="cartpage">
				<div className="cart">
				<i className="fa-solid fa-cart-shopping"></i>
				購物車(<p className="quantity">{cart.length}</p>
				)
				</div>
			</Link>
			<div className="item">
				{
					data.map((product)=>(
					<div className="item-grid" key={product.id} >
						<div className="title">{`name : ${product.title}`}</div>
						<div className="description">{product.description}</div>
						<div className="price">{`price :$ ${product.price}`}</div>
						<button onClick={() => AddToCart(product)}>加入購物車</button>
					</div>
					))}
			</div>
		</div>
		)

  
}
export default Commodity;