import '../style/commodity.css'
import { Link } from "react-router-dom";
import {useState,useEffect}from'react';

/**/

const CartItem=({title,description,price,product,AddToCart,cart,setCart})=>{
	const [Quantity, setQuantity] = useState(0);
	const findItemQuantity=()=>{//商品放到購物車的數量
		if(cart.length!==0)
			for(let i=0;i<cart.length;i++){
				if(product.id===cart[i].id) return cart[i].quantity;
		}
		
	}

  useEffect(() => {
    // 在 quantity 狀態更新後執行的代碼
   
     AddToCart(product, Quantity);

  }, [Quantity]);

  
	return(
		<div className="item-grid"  >
			<div className="title">{`name : ${title}`}</div>
			<div className="description">{description}</div>
			<div className="price">{`price :$ ${price}`}</div>
			數量: {findItemQuantity()}
			<button style={{display:Quantity===0?"block":"nne"}} 
			onClick={()=>setQuantity(Quantity + 1)}>加入購物車</button>
			
		</div>
		)
}

const Commodity=({data,AddToCart,cart,setCart})=>{/*
	const CartAmount=()=>{//購物車總數量
		let amount=0
		if(cart.length!==0)
			for(let i=0;i<cart.length;i++){
				amount+=cart[i].quantity
			}
			return amount;
	}
	useEffect(() => {
    // 在購物車數量更新後執行
     CartAmount();
	
  }, [cart]);*/
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
						price={product.price}product={product}cart={cart}setCart={setCart}/>
					))}
			</div>
		</div>
		)

  
}
export default Commodity;