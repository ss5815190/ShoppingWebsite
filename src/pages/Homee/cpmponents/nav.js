import { Link } from "react-router-dom";
import {useEffect,useContext}from'react';
import MyContext from '../../../compontents/MyContext.js';
import '../style/nav.css';
const Nav=()=>{

	const {cart} = useContext(MyContext);
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
	
  }, [cart]);
	return(
		<div className="nav">
			<Link to="cartpage">
				<div className="cart">
				<i className="fa-solid fa-cart-shopping"></i>
				購物車(<p className="quantity">{CartAmount()}</p>
				)
				</div>
			</Link>
		</div>
		)
}
export default Nav;