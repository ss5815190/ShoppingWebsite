import {useContext}from'react';
import MyContext from '../../compontents/MyContext.js';
import './style/cartpage.css'
const Cartpage=()=>{
	const { cart, setCart } = useContext(MyContext);
	const { totalPrice, setTotalPrice } = useContext(MyContext);

	const deleteItem = (index) => {//刪除商品
    const newCart = [...cart];
    const itemPrice = newCart[index].price;
    const itemquantity= newCart[index].quantity;
    newCart.splice(index, 1);
    setCart(newCart);
    setTotalPrice(totalPrice - itemPrice*itemquantity);
  };
  const inCreaseItem=(index)=>{//增加商品數量
  	const newCart = [...cart];
    const itemPrice = newCart[index].price;
    newCart[index].quantity+=1;
    setCart(newCart);
    setTotalPrice(totalPrice + itemPrice);
  }
  const deCreaseItem=(index)=>{//減少商品數量
  	const newCart = [...cart];
    const itemPrice = newCart[index].price;
    newCart[index].quantity-=1;
    if(newCart[index].quantity===0){
    	newCart.splice(index, 1);
    	setCart(newCart);
    	setTotalPrice(totalPrice - itemPrice);
    }
    setCart(newCart);
    setTotalPrice(totalPrice - itemPrice);
  }
	return(
		
			<div className="cartpage">
	      <h2>購物車</h2>
	      <ul>
	        {cart.map((product, index) => (
	          <li key={index}>
	          	<div className="p_title">{product.title}</div>
	          	<div className="p_price">{product.price}元</div>
	    
	            <button onClick={() => deCreaseItem(index)}>-</button>
	            <div className="p_quantity">數量: {product.quantity} </div>
	            <button onClick={() => inCreaseItem(index)}>+</button>

	            <button className="btn_del"onClick={() => deleteItem(index)}>全部刪除</button>
	          </li>
	        ))}
	      </ul>
	      <div className="tt_price">總價格：{totalPrice}元</div>
	      
	    </div>
	    
		)
}
export default Cartpage;